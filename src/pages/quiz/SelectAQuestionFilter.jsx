import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

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
    setCategory
}) {
    const handleStatus = event => setStatus(event.target.value)
    const handleReview = event => setReview(event.target.value)
    const handleCategory = event => setCategory(event.target.value)

    const statusOptions = [
        { value: 'ready', label: '❓' },
        { value: 'incorrect', label: '❌' },
        { value: 'correct', label: '✔️' },
    ]

    const reviewOptions = [
        { value: 'ready', label: 'Ready!' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: '2-7 days', label: '2-7 days' },
        { value: '> week', label: '> Week' },
        { value: '> month', label: '> Month' },
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
                <div className="filter" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'end' }}>
                    <h4>Filters</h4>
                    <div className='filter-buttons' style={{ display: 'flex', gap: '16px' }}>
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


                        {/* <div className="randomQuestion">
                            Random Question
                        </div> */}
                    </div>
                    <button onClick={handleReset} style={{ height: 40, alignSelf: 'center' }}>
                        Reset
                    </button>
                </div>
            </div>


        </div>
    )
}