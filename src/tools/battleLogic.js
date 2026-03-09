export function typeMultiplier(moveType, targetType, typeInteractions) {
    return typeInteractions[moveType][targetType] ?? 1;
}