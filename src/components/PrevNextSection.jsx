export default function PrevNextSection({ menuItems, selectedSection, setSelectedSection }) {
    const currentIdx = menuItems.indexOf(selectedSection)
    const prev = menuItems[currentIdx - 1]
    const next = menuItems[currentIdx + 1]

    function handlePrev() {
        if (prev) {
            setSelectedSection(prev)
            window.scrollTo(0, 0)
        }
    }

    function handleNext() {
        if (next) {
            setSelectedSection(next)
            window.scrollTo(0, 0)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2em" }}>
            <button
                disabled={!prev}
                onClick={handlePrev}
            >
                {prev ? `← ${prev}` : 'Enjoy 🖥️'}
            </button>
            <button
                disabled={!next}
                onClick={handleNext}
            >
                {next ? `${next} →` : 'Done 😎'}
            </button>
        </div>
    );
}