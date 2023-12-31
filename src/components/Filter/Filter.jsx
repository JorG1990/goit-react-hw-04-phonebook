
import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled";

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={ filter }
        onChange={ onChange }
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
