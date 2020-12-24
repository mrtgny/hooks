import React from 'react';
import Show from "../DisplayConditions/Show";

const ListItem = props => {
    const {
        style,
        avatar,
        title,
        lastItem,
        titleRenderer,
        description,
        titleStyle,
        subtitleStyle,
        titleContainerStyle,
        onClick,
        onTitleClick,
        subtitle,
        subtitleRenderer,
        children
    } = props;
    return (
        <div style={{borderBottom: lastItem && '1px solid #eee', padding: 4, ...(style || {})}}
             className={onClick ? "clickable" : ""}
             onClick={onClick}>
            <div style={{display: "flex", alignItems: 'center'}}>
                <Show condition={avatar}>
                    {avatar}
                </Show>
                <div style={{width: '100%'}} onClick={onTitleClick}
                     className={onTitleClick ? "clickable" : ""}>
                    <div style={{marginLeft: 8, padding: 4, ...(titleContainerStyle || {})}}>
                        <Show condition={titleRenderer}>
                            {titleRenderer}
                        </Show>
                        <Show condition={title}>
                            <div style={{margin: 0, fontWeight: 'bold', ...(titleStyle || {})}}>{title}</div>
                        </Show>
                        <Show condition={subtitle}>
                            <div style={{
                                margin: 0,
                                fontSize: 10,
                                color: 'black', ...(subtitleStyle || {})
                            }}>{subtitle}</div>
                        </Show>
                        <Show condition={subtitleRenderer}>
                            {subtitleRenderer}
                        </Show>
                    </div>
                </div>
                <Show condition={description}>
                    {description}
                </Show>
            </div>
            {children}
        </div>
    )
}

export default ListItem
