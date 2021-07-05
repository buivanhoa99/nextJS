import Head from 'next/head'

import Date from '../../components/date'
import {getAllPostIds,getPostData} from '../../lib/posts'
import Layout from '../../components/layout'
import utilsStyles from '../../styles/utils.module.css'
export default function Post({ postData }) {
    return (
      <Layout>
      <Head>
        <title>{postData.title} </title>
      </Head>
        <br />
    <article>
        <h1 className={utilsStyles.headingX}>{postData.title}</h1>
        <div className={utilsStyles.lightText}>
            <Date dateString= {postData.date}/>
        </div>;
        <div>{postData.id}</div>
    </article>

      </Layout>
    )
  }

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}
