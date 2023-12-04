import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useEffect, useState } from 'react';

export interface IPermissionInfo {
  type: 'R' | 'C';
  name: string;
}

interface PermissionsHanlderProps {
  children: JSX.Element;
}

export default function PermissionHandler({
  children,
}: PermissionsHanlderProps) {
  const { user } = useAuth();

  const [childrenResolved, setChildrenResolved] = useState<JSX.Element | null>(
    null
  );

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

      if (props && props.permissionable) {
        const permission = findPermission(props.permissionable.name);
        if (permission) {
          if (props.permissionable.isDisabled) {
            c = {
              ...c,
              props: {
                ...c.props,
                style: {
                  ...props.style,
                  opacity: 0.5,
                  pointerEvents: 'none',
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

  useEffect(() => {
    if (user) {
      setChildrenResolved(checkComponents(children));
    }
  }, [user]);

  return <>{childrenResolved}</>;
}
