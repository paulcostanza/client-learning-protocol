// Properly list the category with the correct casing and spacing for the user
export function fixGrammar(subject) {
    switch (subject) {
        case "introtocomp":
            return "Intro to Comp"
        case "lowlevel":
            return "Low Level"
        case "html":
            return "HTML"
        case "js":
            return "JavaScript"
        case "react":
            return "React"
        case "networking":
            return "Networking"
        case "python":
            return "Python"
        case "java":
            return "Java"
        case "c":
            return "C"
        case "cSharp":
            return "C#"
        case "go":
            return "Go"
        case "redis":
            return "Redis"
        case "memory":
            return "Memory"
        case "programming101":
            return "Programming 101"
        case "cybersecurity":
            return "CyberSecurity"
        case "linux":
            return "Linux"
        default:
            return "Oops"
    }
}