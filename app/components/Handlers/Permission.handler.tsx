import { useAuth } from "@/app/hooks/UseAuth.hook";
import { useEffect, useState } from "react";

export interface IPermissionInfo {
  type: "R" | "C" | "A";
  name: string;
}

interface PermissionsHanlderProps {
  children: JSX.Element;
}

export default function PermissionHandler({
  children,
}: PermissionsHanlderProps) {
  const { user } = useAuth();

  const checkComponents = (child: JSX.Element) => {
    const childList =
      child.props.children instanceof Array
        ? child.props.children
        : [child.props.children];

    let childs = [] as Array<JSX.Element>;

    for (let c of childList as Array<JSX.Element>) {
      const props = c.props;

      if (props?.children) {
        c = checkComponents(c);
      }

      if (Object.hasOwn(props, "data-permission")) {
        const permission = findPermission(props["data-permission"]?.name);
        if (permission) {
          if (props["data-permission"]?.mode === "disabled") {
            c = {
              ...c,
              props: {
                ...c.props,
                style: {
                  opacity: 0.5,
                  pointerEvents: "none",
                },
              },
            };
            childs.push(c);
          }
        }
      } else {
        childs.push(c);
      }
    }

    return {
      ...child,
      props: {
        ...child.props,
        children: childs,
      },
    };
  };

  const findPermission = (name: string): IPermissionInfo | undefined => {
    return user?.permissions?.find((p) => p.name === name);
  };

  const [childrenResolve, setChildrenResolved] = useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    if (user) {
      setChildrenResolved(checkComponents(children));
    }
  }, [user]);

  return <>{childrenResolve}</>;
}
