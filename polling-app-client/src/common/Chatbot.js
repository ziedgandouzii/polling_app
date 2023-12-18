import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { IoIosChatbubbles } from "react-icons/io";
import styled from 'styled-components';


class Chatbot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatbotVisible: false,
        };
    }

    toggleChatbot = () => {
        this.setState(prevState => ({
            chatbotVisible: !prevState.chatbotVisible,
        }));
    };

    render() {
        const { chatbotVisible } = this.state;

        const chatbotStyle = {
            position: 'fixed',
            bottom: chatbotVisible ? 20 : -500,
            right: 20,
            zIndex: 1000,
            transition: 'bottom 0.3s ease-in-out',
        };

        return (
            <div>
                <div
                    onClick={this.toggleChatbot}
                    style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000, cursor: 'pointer' }}
                >
                    <IoIosChatbubbles size={44} />
                </div>
                <div style={chatbotStyle}>
                    {chatbotVisible && (
                        <ChatBot
                            steps={[
                                {
                                    id: 'Greet',
                                    message: 'Mar7ba Bik fi Polling App',
                                    trigger: 'Ask Name',
                                },
                                {
                                    id: 'Ask Name',
                                    message: 'Ekteb Ismek ',
                                    trigger: 'waiting1',
                                },
                                {
                                    id: 'waiting1',
                                    user: true,
                                    trigger: 'email',
                                },
                                {
                                    id: 'email',
                                    message: 'Mar7be {previousValue},Chniya EMail Mte3k',
                                    trigger: 'waiting2',
                                },
                                {
                                    id: 'waiting2',
                                    user: true,
                                    trigger: 'issue',
                                },
                                {
                                    id: 'issue',
                                    message: 'sa77it,a7ki chniya mochkeltk?',
                                    trigger: 'waiting3',
                                },
                                {
                                    id: 'waiting3',
                                    user: true,
                                    trigger: 'end',
                                },
                                {
                                    id: 'end',
                                    message: 'Messagek wsol , tw nkalmouk',
                                    end: true,
                                },
                            ]}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Chatbot;
