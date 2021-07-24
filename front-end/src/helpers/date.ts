export const format_time = (_date: string | any) => {
    const date = new Date(_date)
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];;
}


