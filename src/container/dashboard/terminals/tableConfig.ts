import moment, { MomentInput } from "moment";

//TO DO REMOVE ANY TYPE
export const terminalsTableMapper = [
  {
    title: "Id",
    key: "id",
    render: (data: { id: any }) => data.id,
  },
  {
    title: "Serial number,",
    key: "serialNumber",
  },
  {
    title: "tid",
    key: "tid",
  },
  {
    title: "status",
    key: "status",
    render: (data: { active: any }) => String(data.active),
  },
  {
    title: "terminal spec no",
    key: "terminalSpecificationId",
  },
  {
    title: "date",
    key: "createdAt",
    render: (data: { createdAt: MomentInput }) =>
      moment(data.createdAt).format("MM-DD-YYYY"),
  },
];
