import "./FilterBar.css";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';

export default function FilterBar ({ sort, setSort, type, setType, allergens, setAllergens }) {

    const updateType = (label, checked) => {
        if (checked) {
            setType([...type, label]);
        } else {
            setType(type.filter(item => item !== label));
        }
    };

    const updateAllergens = (label, checked) => {
        if (checked) {
            setAllergens([...allergens, label]);
        } else {
            setAllergens(allergens.filter(item => item !== label));
        }
    };

    const resetFilters = () => {
        setSort("price");
        setType([]);
        setAllergens([]);
    };

    return (
        <div className="form-container">
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="price" control={<Radio />} label="Price" />
                    <FormControlLabel value="calories" control={<Radio />} label="Calories" />
                </RadioGroup>


                <FormGroup>
                    <FormLabel id="demo-checkbox-group-label">Type</FormLabel>
                    <FormControlLabel control={<Checkbox onChange={e => updateType("sweet", e.target.checked)} checked={type.includes("sweet")} />} label="Sweet" />
                    <FormControlLabel control={<Checkbox onChange={e => updateType("savory", e.target.checked)} checked={type.includes("savory")} />} label="Savory" />
                </FormGroup>

                <FormGroup>
                    <FormLabel id="demo-checkbox-group-label">Allergens</FormLabel>
                    <FormControlLabel control={<Checkbox onChange={e => updateAllergens("dairy-free", e.target.checked)} checked={allergens.includes("dairy-free")} />} label="Dairy-free" />
                    <FormControlLabel control={<Checkbox onChange={e => updateAllergens("gluten-free", e.target.checked)} checked={allergens.includes("gluten-free")} />} label="Gluten-free" />
                    <FormControlLabel control={<Checkbox onChange={e => updateAllergens("nut-free", e.target.checked)} checked={allergens.includes("nut-free")} />} label="Nut-free" />
                    <FormControlLabel control={<Checkbox onChange={e => updateAllergens("eggless", e.target.checked)} checked={allergens.includes("eggless")} />} label="Eggless" />
                </FormGroup>


            </FormControl>
            <button className="reset-filters-button" onClick={resetFilters}>Reset filters</button>
        </div>
    );
}