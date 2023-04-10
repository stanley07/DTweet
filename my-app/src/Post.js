import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";

const Post = forwardRef(
    ({displayName, text, personal, onClick}, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post_avatar">
                    <Avatar 
                      style={{ width: '100px', height: '100px' }}
                      avatarStyle='Circle'
                      {...generateRandomAvatarOptions() }
                    />

                </div>
                <div className="post_body">
                    <div className="post_header">
                        <div className="post_headerText">
                            <h3>
                                {displayName}{" "}
                            </h3>
                        </div>
                        <div className="post_headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                        {personal ? (
                            <DeleteIcon fontSize="small" onClick={onClick} />
                        ) : ("")}
                    </div>
                </div>

            </div>
        );
    }
);

export default Post;