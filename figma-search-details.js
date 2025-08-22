import WebSocket from 'ws';

// WebSocket 연결
const ws = new WebSocket('ws://localhost:3055');
const channelName = 'a2jvt0cr';
const searchFrameId = '0:90';
const searchResultsFrameId = '0:725';

ws.on('open', function open() {
    console.log('WebSocket 연결됨');
    
    // 채널 참가
    const joinMessage = {
        type: 'join',
        channel: channelName,
        id: generateId()
    };
    ws.send(JSON.stringify(joinMessage));
    
    // 잠시 후 Search 프레임 정보 요청
    setTimeout(() => {
        requestSearchFrameInfo();
    }, 1000);
});

ws.on('message', function message(data) {
    try {
        const response = JSON.parse(data);
        console.log('받은 메시지:', JSON.stringify(response, null, 2));
        
        if (response.type === 'system' && response.message && typeof response.message === 'object') {
            if (response.message.result) {
                console.log('채널 연결 성공:', response.message.result);
            }
        }
    } catch (error) {
        console.error('메시지 파싱 오류:', error);
    }
});

ws.on('error', function error(err) {
    console.error('WebSocket 오류:', err);
});

ws.on('close', function close() {
    console.log('WebSocket 연결 끊어짐');
});

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function requestSearchFrameInfo() {
    console.log('Search 프레임 정보 요청 중...');
    
    const message = {
        type: 'message',
        channel: channelName,
        message: {
            command: 'get_node_info',
            params: {
                nodeId: searchFrameId
            }
        }
    };
    
    ws.send(JSON.stringify(message));
    
    // 3초 후 Search Results 프레임 정보 요청
    setTimeout(() => {
        requestSearchResultsFrameInfo();
    }, 3000);
}

function requestSearchResultsFrameInfo() {
    console.log('Search Results 프레임 정보 요청 중...');
    
    const message = {
        type: 'message',
        channel: channelName,
        message: {
            command: 'get_node_info',
            params: {
                nodeId: searchResultsFrameId
            }
        }
    };
    
    ws.send(JSON.stringify(message));
}

// 20초 후 연결 종료
setTimeout(() => {
    console.log('연결 종료');
    ws.close();
    process.exit(0);
}, 20000);
