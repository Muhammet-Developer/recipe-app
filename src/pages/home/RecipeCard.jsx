import { Card, Logo, Div2, Div1,Div3,Button } from "./style";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data, setData }) => {
  const navigate = useNavigate();
  return (
    <Div1>
      {data.map((person, index) => {
        const { label } = person;
        return (
          <Card key={index}>
            <Div3>
              <h2>{person?.recipe.label}</h2>
            </Div3>
            <Logo src={person?.recipe.image} />
            <Div2>
              <Button  onClick={() => navigate(`/:${label}`, { state: person })}>
                View More
              </Button>
            </Div2>
          </Card>
        );
      })}
    </Div1>
  );
};

export default RecipeCard;
