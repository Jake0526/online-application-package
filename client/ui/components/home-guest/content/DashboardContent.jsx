import React, {
  useState,
} from 'react';

import {Panel, DataTable} from "meteor/smart-template";

import { gql, useQuery, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const religionQuery = gql`
query Religion {
  religion {
    id
    code
    name
  }
}
`;

export const DashboardContent = ({ genericData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [religion, setReligion] = useState(true);

  // ~~~~ Data Version Start ~~~~
  const religionResult = useQuery(religionQuery, {
    notifyOnNetworkStatusChange: true,
    onCompleted(data) {
      if (data.religion) {
        setReligion(data.religion);
      } else {
        setReligion([]);
      }

      setIsLoading(false);
    },
  });
  // ~~~~ Data Version End ~~~~

  return (
    <>
      <DataTable
        id="religion-table"
        onClickRowProps={(original) => {
          // $('#id-update').val(original.id);
          // $('#system-scope-update').val(original.systemScope);
          // $('#description-update').val(original.description);
          // $('#remarks-update').val(original.remarks);

          // dataVersionData.forEach((item) => {
          //   if (item.id === original.dataVersionIDRegular) {
          //     $('#data-version-regular-update').val(item.id).trigger('change');
          //   } else if (item.id === original.dataVersionIDCOS) {
          //     $('#data-version-cos-update').val(item.id).trigger('change');
          //   }
          // });

          // $('#modal-update-app-settings').modal('show');
        }}
        loading={isLoading}
        options={{
          searching: false,
          paging: false,
          bInfo: false,
          language: {
            loadingRecords: '&nbsp;',
            emptyTable: 'No Data Available',
          },
        }}
        columns={[
          {
            Header: 'ID',
            id: 'id',
            accessor: 'id',
          },
          {
            Header: 'Code',
            accessor: 'code',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
        ]}
        allowRowClick
        columnDefs={[
          {
            targets: [0],
            visible: false,
            searchable: false,
          },
          { className: 'none', targets: '_all' },
          { className: 'desktop', targets: [1, 2] },
          { className: 'tablet-l', targets: [1, 2] },
          { className: 'tablet-p', targets: [1, 2] },
          { className: 'mobile-l', targets: [1, 2] },
          { className: 'mobile-p', targets: [1, 2] },
        ]}
        actionTrigger={({ name, data }) => {
          if (name === 'delete') {
            // deleteActiveDataVersion(data);
          } else if (name === 'update') {
            // $('#id-update').val(original.id);
            // $('#system-scope-update').val(original.systemScope);
            // $('#description-update').val(data.description);
            // $('#remarks-update').val(data.remarks);

            // dataVersionData.forEach((item) => {
            //   if (item.id === data.dataVersionIDRegular) {
            //     $('#data-version-regular-update').val(item.id).trigger('change');
            //   } else if (item.id === data.dataVersionIDCOS) {
            //     $('#data-version-cos-update').val(item.id).trigger('change');
            //   }
            // });

            // $('#modal-update-app-settings').modal('show');
          }
        }}
        data={religion}
      />
    </>
  );
};
