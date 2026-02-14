export default function Output({ output }) {
    return (
        <div className='output'>
            {output.split(/\r?\n/).map((line, idx) => (
                <div key={idx}>{line}</div>
            ))}
        </div>
    )
}