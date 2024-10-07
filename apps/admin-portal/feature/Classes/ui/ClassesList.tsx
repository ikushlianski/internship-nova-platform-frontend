import { Datagrid, DateField, List, ListBase, ReferenceField, TextField } from 'react-admin';

export const ClassesList = () => {
  return (
    <List resource="classes" empty={<div>courses list</div>}>
      <Datagrid bulkActionButtons={false}>
        {/* <TextField source="id" /> */}
        <TextField source="name" />
        <ReferenceField source="pathId" reference="paths" />
        <ListBase>
          <Datagrid bulkActionButtons={false}>
            <h1>Hello</h1>
          </Datagrid>
        </ListBase>
        {/*         <ReferenceArrayField source="teacherIds" reference="teachers" />
        <ReferenceArrayField source="studentIds" reference="students" /> */}
        <DateField source="startDate" />
        {/* <DateField source="endDate" /> */}
        {/* <ReferenceField source="studentIds"></ReferenceField> */}
      </Datagrid>
    </List>
  );
};
