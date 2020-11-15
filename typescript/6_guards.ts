// guards
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyRessponse {
    header = 'text header'
    result = 'text result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyRessponse | MyError) {
    if (res instanceof MyRessponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
