import { Sun, Moon } from "lucide-react";
import { useCallback, useContext, useState } from "react";
import { ThemeContext, type ThemeContextType } from "../context/Theme";

interface css {
    bg: string,
    color: string,
    fill: string
}

export default function ThemeSwitch() {

    const {theme, changeTheme}: ThemeContextType = useContext(ThemeContext); 

    const [sunCss, setSunCss] = useState<css>({bg: 'bg-sun-bg', color: 'stroke-sun-svg', fill: 'fill-sun-svg'});

    const [moonCss, setMoonCss] = useState<css>({bg: 'bg-theme-inactive-bg', color: 'stroke-theme-inactive-svg', fill: 'fill-theme-inactive-svg'});

    const ToggleTheme = useCallback(() => {
        changeTheme();
        switch(theme) {
            case 'dark':
                setSunCss({bg: 'bg-sun-bg', color: 'stroke-sun-svg', fill: 'fill-sun-svg'});
                setMoonCss({bg: 'bg-theme-inactive-bg', color: 'stroke-theme-inactive-svg', fill: 'fill-theme-inactive-svg'});
                return;
            case 'light':
                setSunCss({bg: 'bg-theme-inactive-bg', color: 'stroke-theme-inactive-svg', fill: 'fill-theme-inactive-svg'});
                setMoonCss({bg: 'bg-moon-bg', color: 'stroke-moon-svg', fill: 'fill-moon-svg'});
                return;
            default:
                return;
        }
    }, [theme, changeTheme]);

    return (
        <div>
            <button
            onClick={ToggleTheme}
            className={sunCss.bg}>
                <Sun className={`${sunCss.fill} ${sunCss.color}`}/>
            </button>
            <button
            onClick={ToggleTheme}
            className={moonCss.bg}>
                <Moon className={`${moonCss.fill} ${moonCss.color}`}/>
            </button>
        </div>
    )
}