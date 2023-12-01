import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useState } from 'react';

export interface IPermissionInfo {
  type: 'R' | 'C' | 'A';
  name: string;
}

interface PermissionsHanlderProps {
  restrictionMode?: 'invisible' | 'disabled';
  children: JSX.Element;
}

export default function PermissionHandler({
  restrictionMode,
  children,
}: PermissionsHanlderProps) {
  const { user } = useAuth();
  const [isChekingPermissions, setIsCheckingPermissions] = useState(false);

  if (!user) return;

  const checkComponents = (child: JSX.Element) => {
    let childrens = child.props.children as Array<any>
    let childs: Array<any> = [];

    if(childrens?.length > 0){
      for(let i = 0; i < childrens.length; i++){
        let c = childrens[i]

        if(c?.props.name) {
           const permission = findPermission(c?.props.name)
            if(permission) {
              childs.push({...c, children: checkComponents(c)})
            }
        }
      }
      return childs;
    }
  }

  const findPermission = (name: string): IPermissionInfo | undefined => {
    return user?.permissions?.find((p) => p.name === name);
  };

  const childrenResolved = {...children, children: checkComponents(children)}

  console.log(childrenResolved);
  

  return <>{childrenResolved}</>;
}
