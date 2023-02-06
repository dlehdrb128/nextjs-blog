import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'



export default function Post({postData}) {


  return (
    <Layout>

        <Head>
            <title>{postData.title}</title>
        </Head>



            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
                </div>
            </article>
{/*         
        {postData.title}
        <br/>
        {postData.id}
        <br/>
        {postData.data}
        <br /> */}
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for id

    const paths = getAllPostIds();
    return {
        paths,
        fallback:false,
    }
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
    // Fetch necessary data for the blog post using params.id
  }