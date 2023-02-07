import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { Button, Checkbox } from "@mui/material";
import useKakao from "../hooks/useKaKao";
import { useState, useEffect } from "react";
import "../styles/Home.module.css";

export default function Home({ allPostsData }) {
  const [container, setContainer] = useState(null);
  const { kakao, map, services, putMarker } = useKakao(container);

  useEffect(() => {
    if (!kakao || !map) return;

    putMarker(33.450701, 126.570667, () => {});
  }, [kakao, map]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, title }) => {
              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              );
            },

            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
          )}
        </ul>

        <Checkbox />

        <Button
          sx={{
            width: "350px",
          }}
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => alert("안녕 클릭!")}
        >
          안녕!
        </Button>

        <div className="kakaomap__container" ref={setContainer}>
          hi world
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
