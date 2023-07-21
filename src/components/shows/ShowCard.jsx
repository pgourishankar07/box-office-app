import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
import { Link } from 'react-router-dom';
function ShowCard({ name, img, id, summary, onStarMeClick, isStarred }) {
  const summaryFormatted = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No desciption';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img} />
      </SearchImgWrapper>

      <h1>{name}</h1>

      <p>{summaryFormatted}...</p>

      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <StarBtn
          type="button"
          onClick={() => onStarMeClick(id)}
          className={isStarred && 'animate'}
        >
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
}

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: rgb(229, 9, 20);
    &:hover {
      text-decoration-color: none;
      color: #dfd3e3;
      font-size: 19px;
    }
  }
`;
const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
