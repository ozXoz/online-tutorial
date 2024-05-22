import React from 'react';
import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { ZegoSuperBoardManager } from 'zego-superboard-web';
import {ZegoExpressEngine} from 'zego-express-engine-webrtc';

const Room = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1988269350;
        const serverSecret = "3f9ebd0e3a972c9f6a79af64e8ae613a";
        const server =  "wss://webliveroom1988269350-api.coolzcloud.com/ws"
        const zg = new ZegoExpressEngine(appID, server);
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Mohammed");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

       
        zp.addPlugins({ZegoSuperBoardManager});
        zp.joinRoom(
        {
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            },
            whiteboardConfig: {            
                showAddImageButton: true
            },
        });
    };
    return (
        <div className='room-page'>
            <div id="parentDomID">
                <div ref={myMeeting} />
            </div>
        </div>
    )
}

export default Room;