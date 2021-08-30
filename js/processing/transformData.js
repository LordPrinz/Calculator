function transformData(element) {
    const classElement = element.className;
    const transformedData = classElement.slice(20).trim().slice(8);
    return transformedData;
}
export default transformData;
