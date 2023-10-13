

type CommonCallBack = (...arg: never[]) => boolean

interface AsyncUntil {
    (conditionFunction: CommonCallBack, interval?: number, tries?: number):Promise<boolean>
}

export const asyncUntil:AsyncUntil = (
    conditionFunction,
    interval = 100,
    tries = Infinity,
) => {
    let attempt = 0;
    const poll = (resolve: (value: boolean) => void) => {
        if (attempt >= tries)
            resolve(false);

        if (conditionFunction())
            resolve(true);
        else {
            attempt += 1;
            setTimeout(() => poll(resolve), interval);
        }
    };
    return new Promise(poll);
};


