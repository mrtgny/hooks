import React from 'react';
import ListItem from "../ListItem";
import Show from "../DisplayConditions/Show";
import appStyles from "../../utils/styles";

const PostCard = props => {
    const {style, avatar, title, titleStyle, headerStyle, titleContainerStyle, description, onHeaderClick, subtitle, onTitleClick, childrenContainerStyle, children} = props;
    return (
        <div style={style}>
            <Show condition={avatar || title || description || subtitle}>
                <ListItem
                    avatar={avatar}
                    title={title}
                    style={{marginBottom: 4, ...(titleContainerStyle || {})}}
                    titleContainerStyle={headerStyle}
                    titleStyle={{fontSize: 18, ...(titleStyle || {})}}
                    description={description}
                    subtitle={subtitle}
                    onTitleClick={onTitleClick}
                    onClick={onHeaderClick}
                />
            </Show>
            {children ?
                <div style={{backgroundColor: 'white', ...appStyles.card}}>
                    <div style={{margin: "0 16px", ...(childrenContainerStyle || {})}}>
                        {children}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default PostCard
