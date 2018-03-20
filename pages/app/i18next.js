import React, {Component} from 'react';
import {i18nInstance} from '@i18next';
import Layout from '@layouts/base';
import {withI18next} from '@hoc/withI18next';


class I18Next extends Component {
    render() {
        const {t} = {...this.props};

        return (
            <Layout title="i18Next 在地化">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>{t('welcome')}</div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default withI18next(['common'])(I18Next);
