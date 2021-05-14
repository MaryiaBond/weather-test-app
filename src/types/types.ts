export type Weather = {
    temperature: {
        actual: number,
    },
    wind: {
        speed: number,
        deg: number,
    },
    clouds: {
        all: number,
        visibility: number,
        humidity: number,
    }
}
