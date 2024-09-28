import React from "react";
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="everything-card mt-10">
      <div className="flex flex-wrap p-5 gap-1 mb-1">
        <b className="title">{props.title}</b>
        {props.imgUrl && (
          <div className="everything-card-img mx-auto">
            <img className="everything-card-img" src={props.imgUrl} alt={props.title} />
          </div>
        )}
        <div className="description">
          <p className="description-text leading-7">
            {props.description?.substring(0, 200)}{props.description?.length > 200 && '...'}
          </p>
        </div>
        <div className="info">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link underline break-words"
            >
              {props.source?.substring(0, 70)}
            </a>
          </div>
          {props.author && (
            <div className="origin flex flex-col">
              <p className="origin-item">
                <span className="font-semibold">Author:</span> {props.author}
              </p>
              <p className="origin-item">
                <span className="font-semibold">Published At:</span> {props.publishedAt}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row">
        {props.imageUrlLeft && (
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
            title={props.imageLeftTitle}
          ></div>
        )}
        <div className="border rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {props.memberIcon && (
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {props.cardTitle}
            </div>
            <p className="text-gray-700 text-base">{props.cardDescription}</p>
          </div>
          {props.authorImage && (
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={props.authorImage}
                alt={`${props.authorName}'s avatar`}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{props.authorName}</p>
                <p className="text-gray-600">{props.publishedDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  url: PropTypes.string.isRequired,
  source: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  imageUrlLeft: PropTypes.string,
  imageLeftTitle: PropTypes.string,
  memberIcon: PropTypes.node,
  memberText: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
  publishedDate: PropTypes.string,
};

export default Card;
