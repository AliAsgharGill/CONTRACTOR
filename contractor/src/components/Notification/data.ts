interface NotificationProps {
  id: number;
  date: string;
  time: string;
  day: string;
  title: string;
  description: string;
}

export const listData: NotificationProps[] = [
  {
    id: 1,
    date: "08-NOV",
    time: "09:15AM",
    day: "Monday",
    title: "Notification Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque euismod enim sed lobortis domestic Lorem ipsum dolor sit amet. Nam pellentesque euismod enim sed lobortis.",
  },
  {
    id: 2,
    date: "09-NOV",
    time: "10:30AM",
    day: "Tuesday",
    title: "Another Notification",
    description:
      "Curabitur pulvinar euismod nisi, id faucibus lectus vehicula vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque euismod enim  Integer auctor ut dui at bibendum.",
  },
  {
    id: 3,
    date: "10-NOV",
    time: "01:00PM",
    day: "Wednesday",
    title: "Important Update",
    description:
      "Nullam eu ligula id magna elementum tincidunt. Vivamus maximus, mauris nec facilisis vehicula, nisl erat tincidunt leo,Lorem ipsum dolor sit amet, consectetur adipiscing Nam pellentesque euismod .",
  },
  {
    id: 4,
    date: "11-NOV",
    time: "03:45PM",
    day: "Thursday",
    title: "Meeting Reminder",
    description:
      "Suspendisse potenti. Proin sit amet turpis a leo finibus lacinia.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque euismod enim sed Cras a est non lorem consectetur condimentum.",
  },
  {
    id: 5,
    date: "12-NOV",
    time: "04:20PM",
    day: "Thursday",
    title: "Event Notification",
    description:
      "Sed malesuada augue sit amet erat tristique, sit amet malesuada turpis ullamcorper.",
  },
  {
    id: 6,
    date: "13-NOV",
    time: "05:15PM",
    day: "Friday",
    title: "System Alert",
    description:
      "Fusce euismod magna sit amet dolor suscipit, vel facilisis justo fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
  },
  {
    id: 7,
    date: "14-NOV",
    time: "06:00PM",
    day: "Saturday",
    title: "Holiday Notice",
    description:
      "Etiam quis magna a arcu auctor varius. Donec facilisis enim nec urna posuere, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque euismod enim sed quis lacinia metus bibendum.",
  },
  {
    id: 8,
    date: "15-NOV",
    time: "07:30AM",
    day: "Sunday",
    title: "Maintenance Update",
    description:
      "Phasellus a magna vel risus tempor venenatis. In malesuada auctor est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque euismod enim sed at vehicula lacus laoreet et.",
  },
  {
    id: 9,
    date: "16-NOV",
    time: "08:45AM",
    day: "Monday",
    title: "New Feature Release",
    description:
      "Vestibulum pharetra nunc nec nisi imperdiet,Nam pellentesque euismod enim sed vel lacinia nisi dapibus. Nam pellentesque euismod enim sed Cras eget bibendum odio.",
  },
  {
    id: 10,
    date: "17-NOV",
    time: "09:00AM",
    day: "Tuesday",
    title: "Weekly Summary",
    description:
      "Proin et ipsum sit amet nisi dapibus vehicula a nec eros. Sed venenatis velit at metus convallis,  Nam pellentesque euismod enim sed a bibendum libero egestas.",
  },
];
