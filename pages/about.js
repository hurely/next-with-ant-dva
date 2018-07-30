import React from 'react';
import MyHeader from '../components/MyHeader';
import axios from '../lib/axios';

 const About = (props) => (
  <MyHeader title="about">
    <div>
    <p className="about">传递的参数{props.url.query.id}</p>
    <p className="about">获取的数据</p>
    <ul>
      {
        props.shows.map(els => {
          return (
            <li key={els._id}>
              {els.name}
            </li>
          )
        })
      }
    </ul>
    {/* <ul className="about">
      {props.shows.map(({show})=>(
        <li key={show._id}>
          {show.name}
        </li>
      ))}
    </ul> */}
      <style jsx>
        {`
        .about {color:#666;padding:10px}
      `}
      </style>
    </div>
  </MyHeader>
)

const isServer = typeof window === 'undefined'

About.getInitialProps = async function () {
  // const res = await axios.get('http://gank.io/api/xiandu/categories')
  return {
    shows:[{_id:1,name:1},{_id:2,name:2}]
  }
}



export default About;