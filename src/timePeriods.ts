export const timePeriods = ["Monthly", "BiWeekly", "Weekly"] as const;

export const timeValueMap = new Map<String, number>([
    ['Monthly', 30],
    ['BiWeekly', 14],
    ['Weekly', 7]
]);
