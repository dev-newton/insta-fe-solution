import { Select, Input } from "@components";

const CargoItemForm = ({ onChange }) => {
  return (
    <div className="action_input_wrapper">
      <div className="route_wrapper">
        <div className="input_row_wrapper">
          <Select size="lg" color="primary" label="Unloading stop">
            <option>Stop 1</option>
            <option>Stop 2</option>
            <option>Stop 3</option>
            <option>Stop 4</option>
          </Select>

          <Select size="md" color="primary" label="Type">
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
            <option>Type 4</option>
          </Select>

          <Input
            label="PO number"
            size="sm"
            color="primary"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <div className="input_row_wrapper">
            <Input
              label="Quantity"
              size="xxs"
              color="primary"
              type="text"
              onChange={onChange}
            />

            <Input
              label="Total weight"
              size="xs"
              color="primary"
              type="number"
              placeholder="kg"
              onChange={onChange}
            />
          </div>
          <div className="input_row_wrapper">
            <Input
              label="Length"
              size="xs"
              color="primary"
              type="number"
              placeholder="cm"
              onChange={onChange}
            />
            <Input
              label="Width"
              size="xs"
              color="primary"
              type="number"
              placeholder="cm"
              onChange={onChange}
            />
            <Input
              label="Height"
              size="xs"
              color="primary"
              type="number"
              placeholder="cm"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoItemForm;
