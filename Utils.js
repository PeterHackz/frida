// read file.
const readFile = function(path) {
    let data = ""
    if (Java.available) {
        Java.perform(function() {
            try {
                var F = Java.use("java.io.File")
                var Scanner = Java.use("java.util.Scanner")
                var file = F.$new(path)
                var reader = Scanner.$new(file)
                var lines = []
                var line = 0
                while (reader.hasNextLine()) {
                    lines[line] = reader.nextLine()
                    line = line + 1
                }
                data = lines.join()
            } catch(error) {}
        })
    }
    return data
}
