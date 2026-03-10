import React from 'react';

const PostCard = ({ data }) => {

  const statusColor = data.status === 'Alive' ? '#55cc44' : data.status === 'Dead' ? '#d63d2e' : '#9e9e9e';

  return (
    <div className="char-card">
      <div className="char-img-container">
        <img src={data.image} alt={data.name} className="char-img" />
      </div>
      <div className="char-info">
        <h2 className="char-name">{data.name}</h2>
        <div className="char-status">
          <span className="status-icon" style={{ backgroundColor: statusColor }}></span>
          {data.status} - {data.species}
        </div>
        <div className="char-label">Последняя локация:</div>
        <div className="char-value">{data.location.name}</div>
        
        <div className="char-label">Гендер:</div>
        <div className="char-value">{data.gender}</div>
      </div>
    </div>
  );
};

export default PostCard;