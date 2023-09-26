function solution(files) {
    let dict = []
    files.forEach((entry, idx) => {
        let [fn, head, num] = entry.match(/^([a-zA-Z-\. ]+)([0-9]+)(.*)$/)
        dict.push({fn, head: head.toLowerCase(), num: parseInt(num), idx})
    })

    return dict.sort((a, b) => {
        if (a.head > b.head) return  1
        if (a.head < b.head) return -1
        if (a.num > b.num) return  1
        if (a.num < b.num) return -1
        return a.idx - b.idx
    }).map(e => e.fn)
}