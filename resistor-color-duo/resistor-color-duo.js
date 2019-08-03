const colorMap = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const value = resistors => parseInt(resistors.map(resistor => colorMap.indexOf(resistor)).join(""))
