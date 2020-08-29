import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { IFolioComponentProps, mapDispatchToProps, mapStateToProps } from './folio.state';

import * as blogStyles from "./folio.css"
import { IAssetPayload } from 'models/asset';

export type IProps = {
    to: string
}

export const blockType = ( content: any, marks?: []) => {
    const codeMark = marks && marks.find((dd: any) => dd?.type === 'code');
    const codeBold = marks && marks.find((dd: any) => dd?.type === 'bold');
    if(!content) return <Fragment></Fragment>;
    if(codeMark) return (<pre className={blogStyles["Block--Code"]}>{content}</pre>);
    if(codeBold) return (<b>{content}</b>);
    return (<span>{content}</span>);
}

const findAsset = (assets: IAssetPayload[], id: string) => assets.find(item => item.sys.id === id)

export class BlogView extends Component<IFolioComponentProps, {}> {
    componentWillMount() {
        const { onFetchAction } = this.props
        onFetchAction();
    }

    render() {
        const { folio, assets} = this.props;
        return(
            <div className={blogStyles.InnerContainer}>
                {folio?.map(item => {
                    console.log('item?.fields?.primaryMediaItem?.sys?.id ,', item?.fields?.primaryMediaItem?.sys?.id)
                    return (
                        <div className={blogStyles['Entry--Container']}>
                            <h1>{item?.fields?.title}</h1>
                            <img className={blogStyles['Entry--Primary-image']} src={findAsset(assets, item?.fields?.primaryMediaItem?.sys?.id)?.fields?.file?.url}/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BlogView);