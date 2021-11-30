// import { FaArrowRight, FaCalendar, FaTag, FaUser } from "react-icons/fa/";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Item = ({theme, post}) => {

  const Li = styled.li`
    border: 1px solid transparent;
    border-radius: ${theme.size.radius.default};
    margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
    padding: ${theme.space.inset.s};
    position: relative;
    transition: all ${theme.time.duration.default};
    background: transparent;

    .gatsby-image-outer-wrapper {
      border-radius: ${theme.size.radius.default};
      border: 1px solid ${theme.line.color};
      overflow: hidden;
    }
    .gatsby-image-outer-wrapper img {
      z-index: -1;
    }

    @media (min-width: 600px){
      margin: ${`calc(${theme.space.default} * 3) 0 calc(${theme.space.default} * 4)`};
      padding: ${theme.space.default};

      &::after {
        bottom: ${`calc(${theme.space.default} * -2)`};
      }

      &:first-child {
        &::before {
          top: ${`calc(${theme.space.default} * -1.75)`};
        }
      }
    }

    @media (min-width: 1024px){
      margin: ${`calc(${theme.space.default} * 4) 0 calc(${theme.space.default} * 5)`};
      padding: 0 0 ${`calc(${theme.space.default} * 2)`};

      &::after {
        bottom: ${`calc(${theme.space.default} * -1.5)`};
      }

      &:first-child {
        &::before {
          top: ${`calc(${theme.space.default} * -2.75)`};
        }
      }
      &:hover {
        border: 1px solid ${theme.line.color};
        box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);

        &:after {
          bottom: ${`calc(${theme.space.default} * -2.5)`};
        }
        .gatsby-image-wrapper {
          transform: scale(1.1);
        }
        h1 {
          color: ${theme.blog.h1.hoverColor};
        }
        .arrow {
          opacity: 1;
          stroke: ${theme.color.special.attention};
          transform: translateX(0);
        }
      }
      .gatsby-image-wrapper {
        transition: all ${theme.time.duration.default};
      }
      .arrow {
        display: inline-block;
        fill: transparent;
        stroke: ${theme.color.special.attention};
        stroke-width: 40;
        stroke-linecap: round;
        opacity: 0;
        transition: all 0.5s;
        transform: translateX(-50%);
      }
    }

    &::after {
      border-top: 1px solid ${theme.line.color};
      content: "";
      height: 0;
      position: absolute;
      bottom: ${`calc(${theme.space.default} * -1.5)`};
      left: 50%;
      transform: translateX(-50%);
      transition: all ${theme.time.duration.default};
      width: 50%;
    }

    &:first-child {
      &::before {
        border-top: 1px solid ${theme.line.color};
        content: "";
        height: 0;
        position: absolute;
        top: ${`calc(${theme.space.default} * -1.5)`};
        left: 50%;
        transform: translateX(-50%);
        transition: all ${theme.time.duration.default};
        width: 50%;
      }
    }
  `

  const Excerpt = styled.p`
    line-height: 1.5;
    padding: 0 ${theme.space.s};

    @media (min-width: 600px){
      padding: 0 ${theme.space.default};
    }

    @media (min-width: 1024px){
      padding: ${`0 calc(${theme.space.default} * 2)`};
    }
  `

  const H1 = styled.h1`
    padding: ${theme.space.m} ${theme.space.s} 0;
    line-height: ${theme.blog.h1.lineHeight};
    font-size: ${theme.blog.h1.size};
    /* text-remove-gap: both; */
    @media (min-width: 600px){
      font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
      padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
      transition: all 0.5s;
    }

    @media (min-width: 1024px){
      font-size: 2.5em;
      padding: ${`calc(${theme.space.default} * 1.2) calc(${theme.space.default} * 2) 0`};
    }

    .arrow {
      display: none;
      position: relative;
      top: 7px;
    }
  `

  return (
    <React.Fragment>
      <Li>
        <Link to={post.fields.slug} key={post.fields.slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <GatsbyImage image={post.frontmatter.cover.childImageSharp.gatsbyImageData} />
          </div>
          <H1>
            {post.frontmatter.title} 
             {/* <FaArrowRight className="arrow" /> */}
          </H1>
          <p className="meta">
            {/* <span>
              <FaCalendar size={18} /> {prefix}
            </span> */}
            {/* <span>
              <FaUser size={18} /> {author}
            </span> */}
            {/* {category && (
              <span>
                <FaTag size={18} /> {category}
              </span>
            )} */}
          </p>
          <Excerpt>{post.excerpt}</Excerpt>
        </Link>
      </Li>

    </React.Fragment>
  );
};


export default Item;
