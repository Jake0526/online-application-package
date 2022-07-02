import React from 'react';
import { SideBarPage, LeftPanel, RightPanel } from 'meteor/smart-template';

export default App = (props) => {
  const defaultPhoto = props.state.loginData.profile.sex === 'Male'
    ? '/dist/img/demo/avatars/avatar-m.png'
    : '/dist/img/demo/avatars/avatar-f.png';
  const userPhoto = props.state.loginData
    ? props.state.loginData.profile.photo
      ? props.state.loginData.employmentActive.employmentType === 'regular'
        ? `/regular/photo/${props.state.loginData.profile.photo}`
        : `/regular/cos/${props.state.loginData.profile.photo}`
      : props.state.loginData.profile.sex === 'Male'
        ? '/dist/img/demo/avatars/avatar-m.png'
        : '/dist/img/demo/avatars/avatar-f.png'
    : '/dist/img/demo/avatars/avatar-m.png';

  return (
    <SideBarPage>
      <LeftPanel
        title="Online Application"
        version="System Version 0.0.1"
        appLogo=""
        user={{
          nickname: props.state.loginData.profile.nickName
            ? props.state.loginData.profile.nickName
            : props.state.loginData.profile.firstName,
          userTitle: props.state.genericData.positionName,
          userPhoto,
          imageHash: props.imageHash,
          defaultPhoto,
        }}
      >
        <LeftPanel.Menu
          menu={[
            {
              name: 'Dashboard',
              icon: 'fal fa-chart-area',
              id: 'dashboard',
              href: '/',
              subMenu: [],
            },
            {
              name: 'Dashboard1',
              icon: 'fal fa-chart-area',
              id: 'dashboard1',
              href: '/dashboard1',
              subMenu: [],
            },
          ]}
          active={props.active}
          subActive={props.subActive}
        />
      </LeftPanel>

      <RightPanel>
        <RightPanel.PageHeader>
          <RightPanel.PageHeader.MyAppsDropDown local={false} />
          <RightPanel.PageHeader.ProfileDropDown user={{
            nickname: props.state.loginData.profile.nickName,
            fullName: `${props.state.loginData.profile.firstName} ${props.state.loginData.profile.middleName} ${props.state.loginData.profile.lastName}`,
            userTitle: props.state.genericData.positionName,
            userPhoto,
            imageHash: props.imageHash,
            defaultPhoto,
          }}
          />
        </RightPanel.PageHeader>

        <RightPanel.Content>
          {props.children}
        </RightPanel.Content>

        <RightPanel.Footer year="2021" appName="Online Application" />
        <RightPanel.Shortcut />
      </RightPanel>
    </SideBarPage>
  );
};
