import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function FilterSelect({ value, onChange, label, options }) {
    const selected = options.find(opt => opt.value === value)
    return (
        <Select
            value={value}
            onChange={onChange}
            displayEmpty
            inputProps={{ 'aria-label': label }}
            sx={{
                color: 'white',
                border: '1px solid white',
                '& .MuiSelect-icon': { color: 'white' },
                '&.Mui-focused': {
                    borderColor: 'white',
                    boxShadow: 'none !important',
                    outline: 'none !important',
                },
                '& fieldset': {
                    borderColor: 'white',
                }
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: 'black',
                        maxHeight: 250,
                    }
                }
            }}
            renderValue={() =>
                selected ? selected.label : <span style={{ color: 'white' }}>{label}</span>
            }
        >
            {options.map(opt => (
                <MenuItem key={opt.value} value={opt.value} sx={{ color: 'white' }}>
                    {opt.label}
                </MenuItem>
            ))}
        </Select>
    )
}

export default function SelectAQuestionFilter({
    status,
    setStatus,
    review,
    setReview,
    category,
    setCategory,
    onRandom,
    randomDisabled
}) {
    const handleStatus = event => setStatus(event.target.value)
    const handleReview = event => setReview(event.target.value)
    const handleCategory = event => setCategory(event.target.value)

    const statusOptions = [
        { value: 'none', label: 'None' },
        { value: 'ready', label: '❓' },
        { value: 'incorrect', label: '❌' },
        { value: 'correct', label: '✔️' },
    ]

    const reviewOptions = [
        { value: 'ready', label: 'Ready!' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: '< a week', label: '< a Week' },
        { value: '< a month', label: '< a Month' },
        { value: '> a month', label: '> a Month' },
    ]

    const categoryOptions = [
        { value: 'LowLevel', label: 'Low Level' },
        { value: 'React', label: 'React' },
        { value: 'Networking', label: 'Networking' },
        { value: 'Python', label: 'Python' },
        { value: 'Java', label: 'Java' },
        { value: 'C', label: 'C' },
        { value: 'C#', label: 'C#' },
        { value: 'Redis', label: 'Redis' },
        { value: 'Memory', label: 'Memory' },
        { value: 'Programming 101', label: 'Programming 101' },
        { value: 'CyberSecurity', label: 'CyberSecurity' },
        { value: 'Linux', label: 'Linux' }
    ]

    const handleReset = () => {
        setStatus('')
        setReview('')
        setCategory('')
    }

    return (
        <div className="questionFilter">
            <div className="filters">
                <div className="filter" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='filter-buttons' >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FilterSelect
                                value={status}
                                onChange={handleStatus}
                                label="Status"
                                options={statusOptions}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FilterSelect
                                value={review}
                                onChange={handleReview}
                                label="Review"
                                options={reviewOptions}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FilterSelect
                                value={category}
                                onChange={handleCategory}
                                label="Category"
                                options={categoryOptions}
                            />
                        </FormControl>
                    </div>
                    <div className='buttons'>
                        <Box sx={{ '& button': { m: 1 } }}>
                            <Button
                                sx={{ fontWeight: 'bold' }}
                                color="primary"
                                variant="contained"
                                size="large"
                                onClick={onRandom}
                                disabled={randomDisabled}
                            >Random</Button>
                            <Button
                                sx={{ fontWeight: 'bold' }}
                                color="error"
                                variant="contained"
                                size="large"
                                onClick={handleReset}
                            >
                                Reset
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}