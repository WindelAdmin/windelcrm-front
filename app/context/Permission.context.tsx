import { useRouter } from 'next/navigation';
import { ReactElement, createContext, useEffect } from 'react';
import { useAuth } from '../hooks/UseAuth.hook';
import { PermissionsProps } from './User.context';

export interface PermissionInfoProps {
  type: 'R' | 'C';
  name: string;
}

interface PermissionsProviderValues {
  permissions: PermissionsProps[];
}

export const PermissionContext = createContext({} as PermissionsProviderValues);

export default function PermissionProvider({
  componentInfo: permissionInfo,
  children,
}: {
  componentInfo: PermissionInfoProps;
  children: ReactElement;
}) {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return;

  const findPermission = (name: string) => {
    return user?.permissions?.find((p) => p.name === name);
  };

  useEffect(() => {
    if (
      permissionInfo.type === 'R' &&
      !findPermission(permissionInfo.name)
    ) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <PermissionContext.Provider value={{ permissions: user?.permissions }}>
      {permissionInfo.type === 'R'
        ? findPermission(permissionInfo.name)
          ? children
          : null
        : findPermission(permissionInfo.name)
        ? children
        : null}
    </PermissionContext.Provider>
  );
}
