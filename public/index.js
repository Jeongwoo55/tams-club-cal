const req = new XMLHttpRequest();
req.open('POST', 'https://api.michaelzhao.xyz/log');
req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
req.setRequestHeader('Access-Control-Allow-Origin', '*');
req.send(JSON.stringify({ dir: 'tams.club' }));
req.onload = () => {
    console.log(req.response);
};
