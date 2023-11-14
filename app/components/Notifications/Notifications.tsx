'use client';
import React, { useEffect, useState } from 'react';
import { WBreadcrumbs } from '../../Breadcrumbs/WBreadcrumbs';
import { PageContainer } from '../PageContainer/Page.Container';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { NotificationsPanel } from './Notifications.Panel';
import { TableHeaderModal } from '../../Table/TableHeader/Table.Header.Modal';
import { ModalDelete } from '../../Modal/Modal.Delete';
import { fetchPageNotification } from '@/app/hooks/usePage/Hook.usePageNotification';
import Tab from '@mui/material/Tab';
import { useSearchParams } from 'next/navigation';
import { AllNotificationsProps } from './Notifications.Interface';
import { Box } from '@mui/material';
import { ModalAnnouncements } from './Announcements/Announcements.Form';

export function NotificationsPage() {
  const routeAPi = 'avisos';
  const routeForm = '/notificacoes/findAllUnreadNotification';
  const searchParams = useSearchParams();
  const id = +(searchParams.get('id') || 0);
  const [selectedTab, setSelectedTab] = useState('all');
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState<AllNotificationsProps | undefined>();
  const [allNotifications, setAllNotifications] = useState<
    AllNotificationsProps[]
  >([]);
  const [announcements, setAnnouncements] = useState<AllNotificationsProps[]>(
    []
  );
  const [notifications, setNotifications] = useState<AllNotificationsProps[]>(
    []
  );
  const [selectedMessageId, setSelectedMessageId] = useState<number>();
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const { data: AnnouncementsData, refetch } = fetchPageNotification(routeAPi, {
    page: 1,
  });
  const { data: NotificationsData } = fetchPageNotification(
    routeForm,
    {
      page: 1,
    }
  );

  useEffect(() => {
    const notificationsArray: any = [];
    if (AnnouncementsData) {
      const announcements = AnnouncementsData.list
        .filter((not: any) => new Date(not.validade) >= new Date())
        .map((not: any) => {
          const option = {
            message: not.texto,
            createdAt: new Date(not.createdAt),
            title: not.assunto,
            id: not.id,
            expireDate: not.validade,
            urgent: not.urgente,
            type: 'announcement',
            author: not.usuario.name,
          };
          notificationsArray.push(option);
          return option;
        });
      announcements
        .sort((a: any, b: any) => {
          return a.createdAt?.getTime() - b.createdAt?.getTime();
        })
        .reverse();

      setAnnouncements(announcements);
    }

    if (NotificationsData) {
      const notifications = NotificationsData.list.map((not: any) => {
        const option = {
          message: not.textoNotificacao,
          createdAt: new Date(not.createdAt),
          title: not.titulo,
          id: not.id,
          type: 'notifications',
          read: not.lido,
          author: not.usuario.name,
        };
        notificationsArray.push(option);
        return option;
      });
      notifications
        .sort((a: any, b: any) => {
          return a.createdAt?.getTime() - b.createdAt?.getTime();
        })
        .reverse();
      setNotifications(notifications);
    }
    notificationsArray
      .sort((a: any, b: any) => {
        return a.createdAt?.getTime() - b.createdAt?.getTime();
      })
      .reverse();
    setAllNotifications(notificationsArray);
  }, [AnnouncementsData, NotificationsData]);

  useEffect(() => {
    if (allNotifications) {
      if (id > 0) {
        const notification = allNotifications.find(
          (val: any) => val.id === +id
        );
        notification && handleMenuItemClick(notification);
      } else {
        setSelectedMessageId(allNotifications[0]?.id);
      }
    }
  }, [allNotifications]);

  const handleDelete = (rec?: AllNotificationsProps) => {
    setRecord(rec);
    setModalOpenDelete(true);
  };

  const closeModal = () => {
    setRecord(undefined);
    setOpen(false);
    setModalOpenDelete(false);
  };

  const openModal = (rec?: AllNotificationsProps) => {
    setRecord(rec);
    setOpen(true);
  };

  const handleMenuItemClick = (record: AllNotificationsProps) => {
    setSelectedMessageId(record?.id);
  };

  return (
    <PageContainer>
      <ModalAnnouncements
        isOpen={open}
        closeModal={closeModal}
        refetch={refetch}
        record={record}
      />
      <ModalDelete
        id={record?.id}
        modalOpen={modalOpenDelete}
        onClose={closeModal}
        name={record?.title}
        routerAPI={routeAPi}
        refetch={refetch}
      />
      <WBreadcrumbs father='Central de Notificações' />
      <TableHeaderModal
        onClick={() => {
          openModal();
        }}
        title='Notificações'
      />
      <TabContext value={selectedTab}>
        <TabList>
          <Tab
            label='Todos'
            onClick={() => setSelectedTab('all')}
            value='all'
          />
          <Tab
            label='Avisos'
            onClick={() => setSelectedTab('announcemets')}
            value='announcemets'
          />
          <Tab
            label='Notificações'
            onClick={() => setSelectedTab('notifications')}
            value='notifications'
          />
        </TabList>
        <Box>
          <TabPanel value='all' sx={{ padding: 0 }}>
            <NotificationsPanel
              notifications={allNotifications}
              handleEditAnnouncement={openModal}
              handleDeleteAnnouncement={handleDelete}
              selectedId={selectedMessageId}
              handleMenuItemClick={handleMenuItemClick}
            />
          </TabPanel>
          <TabPanel value='announcemets' sx={{ padding: 0 }}>
            <NotificationsPanel
              notifications={announcements}
              handleEditAnnouncement={openModal}
              handleDeleteAnnouncement={handleDelete}
              selectedId={selectedMessageId}
              handleMenuItemClick={handleMenuItemClick}
            />
          </TabPanel>
          <TabPanel value='notifications' sx={{ padding: 0 }}>
            <NotificationsPanel
              notifications={notifications}
              selectedId={selectedMessageId}
              handleMenuItemClick={handleMenuItemClick}
            />
          </TabPanel>
        </Box>
      </TabContext>
    </PageContainer>
  );
}
