import React from 'react'
import {connect} from 'react-redux';
import {initStore} from '@stores'
import {addLife} from '@stores/actions/game'
import withRedux from 'next-redux-wrapper';
import AddLife from '@components/atoms/AddLife';
import Layout from "@components/layouts/Master";
import {withI18next} from '@hoc/withI18next';
import {asset} from "@utils/uri/index";


const mapStateToProps = (state) => ({
    gameLife: state.game.life,
});


@withI18next()
@withRedux(initStore, null, {addLife})
@connect(mapStateToProps)

export default class extends React.PureComponent {
    static getInitialProps({store, isServer}) {
        //剛進入就送一條命, 這裡可已改成 呼叫API給預設值
        store.dispatch(addLife())

        return {isServer}
    }



    render() {
        const {t,gameLife} = {...this.props};

        return (
            <Layout title={t('menu.game')}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{t('game.title')}</h1>
                                <div style={{paddingTop: '20px'}}>
                                    <img className="img-fluid" src={asset('img/game.gif')}/>
                                </div>

                            </div>
                            <div className="col-12">
                                <AddLife/>
                                {
                                    gameLife <= 1 && (
                                        <div>{t('game.desc')}</div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}