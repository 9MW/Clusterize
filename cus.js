var aRows1 = [];
for (var i = 1; i < 5001; ++i) {
    aRows1.push('<tr><td>input</td><td>input</td><td>input</td><td>input</td><td>input</td></tr>');
}
var clusterize1 = new Clusterize({
    rows: aRows1,
    scrollId: 'scroll-area1',
    contentId: 'content-area1'
});

var aRows2 = [];
for (var i = 1; i < 5001; ++i) {
    aRows2.push('<tr><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>');
}
var clusterize2 = new Clusterize({
    rows: aRows2,
    scrollId: 'scroll-area2',
    contentId: 'content-area2'
});