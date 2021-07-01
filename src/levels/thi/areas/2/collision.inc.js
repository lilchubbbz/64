// Thi

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_SPECIAL_INIT,
    SPECIAL_OBJECT_WITH_YAW, SPECIAL_OBJECT, COL_WATER_BOX_INIT, COL_WATER_BOX, COL_END,
    SURFACE_DEFAULT, SURFACE_DEATH_PLANE, SURFACE_WALL_MISC, SURFACE_ICE,
    SURFACE_HARD_VERY_SLIPPERY, SURFACE_HARD_NOT_SLIPPERY, SURFACE_VERTICAL_WIND,
    SURFACE_CAMERA_8_DIR,
    special_null_start, special_level_geo_03, special_bubble_tree
} from "../../../../include/surface_terrains"

// 0x0700BD60 - 0x0700D444
export const thi_seg7_area_2_collision = [
    COL_INIT(),
    COL_VERTEX_INIT(0x16E),
    COL_VERTEX(-450, -869, -4085),
    COL_VERTEX(-450, -869, -4904),
    COL_VERTEX(-40, -1381, -4494),
    COL_VERTEX(369, -869, -4904),
    COL_VERTEX(369, -869, -4085),
    COL_VERTEX(-450, -767, -4085),
    COL_VERTEX(-450, -767, -4904),
    COL_VERTEX(369, -767, -4904),
    COL_VERTEX(369, -767, -4085),
    COL_VERTEX(188, -183, 404),
    COL_VERTEX(154, -183, 307),
    COL_VERTEX(154, -153, 307),
    COL_VERTEX(292, -153, 691),
    COL_VERTEX(92, -153, 307),
    COL_VERTEX(246, -153, 707),
    COL_VERTEX(246, -183, 983),
    COL_VERTEX(-537, 630, 169),
    COL_VERTEX(-411, 630, 77),
    COL_VERTEX(691, 630, 169),
    COL_VERTEX(-767, 246, 307),
    COL_VERTEX(-411, 630, 94),
    COL_VERTEX(922, 246, 307),
    COL_VERTEX(566, 630, 94),
    COL_VERTEX(566, 630, 77),
    COL_VERTEX(691, 630, 77),
    COL_VERTEX(691, 660, 77),
    COL_VERTEX(-690, 329, 77),
    COL_VERTEX(1720, -613, -398),
    COL_VERTEX(1874, -613, -398),
    COL_VERTEX(1690, -491, -1381),
    COL_VERTEX(1720, -613, -153),
    COL_VERTEX(1874, -613, 31),
    COL_VERTEX(1690, -1996, -1381),
    COL_VERTEX(1690, -460, -1381),
    COL_VERTEX(1690, -460, -1996),
    COL_VERTEX(1690, -613, -153),
    COL_VERTEX(492, -183, 1137),
    COL_VERTEX(768, -183, 1137),
    COL_VERTEX(492, -153, 1137),
    COL_VERTEX(522, -153, 1106),
    COL_VERTEX(768, -153, 1106),
    COL_VERTEX(276, -183, 952),
    COL_VERTEX(292, -183, 691),
    COL_VERTEX(276, -214, 952),
    COL_VERTEX(-690, 660, 77),
    COL_VERTEX(-383, 660, -536),
    COL_VERTEX(-383, 660, 77),
    COL_VERTEX(1690, -460, -1689),
    COL_VERTEX(1321, -552, -1689),
    COL_VERTEX(1321, -583, -1566),
    COL_VERTEX(1690, -460, -1566),
    COL_VERTEX(891, -613, -1566),
    COL_VERTEX(1321, -552, -1566),
    COL_VERTEX(246, -214, 983),
    COL_VERTEX(-537, 507, -382),
    COL_VERTEX(-690, 660, -229),
    COL_VERTEX(-690, 507, -229),
    COL_VERTEX(-767, 246, -75),
    COL_VERTEX(-690, 329, -75),
    COL_VERTEX(256, -153, 307),
    COL_VERTEX(-767, 154, 307),
    COL_VERTEX(-1074, 154, 307),
    COL_VERTEX(-1303, -153, -153),
    COL_VERTEX(-1381, -153, 307),
    COL_VERTEX(-1381, -3, -552),
    COL_VERTEX(-1074, 369, -153),
    COL_VERTEX(-1381, -153, 1229),
    COL_VERTEX(-767, -60, 614),
    COL_VERTEX(-767, 154, 461),
    COL_VERTEX(-844, 154, -75),
    COL_VERTEX(-767, -153, 614),
    COL_VERTEX(-767, -60, 399),
    COL_VERTEX(-767, 154, -75),
    COL_VERTEX(-448, -153, 399),
    COL_VERTEX(-460, -153, 308),
    COL_VERTEX(-448, -60, 399),
    COL_VERTEX(-460, -153, 307),
    COL_VERTEX(-767, 246, -921),
    COL_VERTEX(-844, 369, -153),
    COL_VERTEX(-1535, 31, -644),
    COL_VERTEX(-1689, -91, -153),
    COL_VERTEX(-1381, 19, -1074),
    COL_VERTEX(-1381, 28, -736),
    COL_VERTEX(-1381, 31, -644),
    COL_VERTEX(-1535, -153, -153),
    COL_VERTEX(-1228, -1996, -1381),
    COL_VERTEX(-1538, 86, -1719),
    COL_VERTEX(-1535, 0, -1381),
    COL_VERTEX(-1013, -122, -1381),
    COL_VERTEX(-1381, 0, -1381),
    COL_VERTEX(-1074, 154, -1381),
    COL_VERTEX(-1074, 154, -921),
    COL_VERTEX(-1268, 102, -736),
    COL_VERTEX(-1381, 215, -736),
    COL_VERTEX(-1074, 246, -921),
    COL_VERTEX(-1074, 305, -552),
    COL_VERTEX(-767, 154, -921),
    COL_VERTEX(-844, 507, -75),
    COL_VERTEX(-844, 154, -153),
    COL_VERTEX(-844, 507, -382),
    COL_VERTEX(-687, 332, -382),
    COL_VERTEX(-383, 660, -997),
    COL_VERTEX(1690, -153, -1382),
    COL_VERTEX(-306, 1229, -766),
    COL_VERTEX(538, 660, -997),
    COL_VERTEX(-1381, -460, 1229),
    COL_VERTEX(-306, -153, 1536),
    COL_VERTEX(-1535, -275, 1229),
    COL_VERTEX(-1381, -460, 2150),
    COL_VERTEX(1690, -828, 31),
    COL_VERTEX(1812, -736, -398),
    COL_VERTEX(1690, -1043, -245),
    COL_VERTEX(1690, -613, -398),
    COL_VERTEX(-214, 1167, -244),
    COL_VERTEX(1905, -849, 1997),
    COL_VERTEX(1280, -1074, 2150),
    COL_VERTEX(1905, -849, 2150),
    COL_VERTEX(2150, -583, 2458),
    COL_VERTEX(2150, -849, 1997),
    COL_VERTEX(2058, -849, 2150),
    COL_VERTEX(-1381, -890, 2458),
    COL_VERTEX(-1381, -921, 2458),
    COL_VERTEX(-1381, -890, 2150),
    COL_VERTEX(-1535, -890, 2458),
    COL_VERTEX(-1381, -890, 1536),
    COL_VERTEX(-1535, -890, 1536),
    COL_VERTEX(-1535, -153, 1229),
    COL_VERTEX(-1535, -183, -1381),
    COL_VERTEX(-1538, -1074, -1565),
    COL_VERTEX(-1381, 215, -552),
    COL_VERTEX(-1228, -767, -2149),
    COL_VERTEX(-1228, -767, -1381),
    COL_VERTEX(-2303, -1074, 1843),
    COL_VERTEX(-2457, -1074, 2458),
    COL_VERTEX(-2303, -890, 1843),
    COL_VERTEX(-2457, -890, 1843),
    COL_VERTEX(-2149, -890, 1536),
    COL_VERTEX(-1535, -1074, 1536),
    COL_VERTEX(1997, -460, -1381),
    COL_VERTEX(1997, -1996, -1381),
    COL_VERTEX(1997, -460, -859),
    COL_VERTEX(2304, -460, -1996),
    COL_VERTEX(1997, -460, -767),
    COL_VERTEX(2304, -460, -767),
    COL_VERTEX(2304, -1996, -1381),
    COL_VERTEX(2150, -1996, 1075),
    COL_VERTEX(2150, -767, 1690),
    COL_VERTEX(2150, -1996, 2458),
    COL_VERTEX(538, 660, 77),
    COL_VERTEX(845, 968, -536),
    COL_VERTEX(691, 968, -872),
    COL_VERTEX(768, -153, 922),
    COL_VERTEX(1690, -460, 615),
    COL_VERTEX(768, -153, 1229),
    COL_VERTEX(1690, -767, 1459),
    COL_VERTEX(1690, -460, 1229),
    COL_VERTEX(768, -1074, 1843),
    COL_VERTEX(1229, -767, 1459),
    COL_VERTEX(768, -460, 1229),
    COL_VERTEX(1690, -767, 1690),
    COL_VERTEX(1690, -1074, 1690),
    COL_VERTEX(1997, -1996, 1075),
    COL_VERTEX(1690, -767, 1229),
    COL_VERTEX(2150, -767, 1075),
    COL_VERTEX(1997, -1996, 215),
    COL_VERTEX(2120, -1996, 31),
    COL_VERTEX(2243, -1996, 92),
    COL_VERTEX(2120, -767, 31),
    COL_VERTEX(1997, -767, 768),
    COL_VERTEX(2150, -1996, 768),
    COL_VERTEX(1997, -767, 215),
    COL_VERTEX(2304, -767, 215),
    COL_VERTEX(2176, -767, 676),
    COL_VERTEX(1997, -1996, 768),
    COL_VERTEX(-1013, -245, -1504),
    COL_VERTEX(-275, -429, -1627),
    COL_VERTEX(-1013, -398, -1504),
    COL_VERTEX(-1013, -122, -1596),
    COL_VERTEX(-1013, -183, -1689),
    COL_VERTEX(-275, -1996, -1627),
    COL_VERTEX(-1013, -1996, -1504),
    COL_VERTEX(-1020, -1996, -1505),
    COL_VERTEX(-1013, -30, -1689),
    COL_VERTEX(-1689, -60, -1689),
    COL_VERTEX(-1684, 240, -1710),
    COL_VERTEX(-1689, 61, -1381),
    COL_VERTEX(-1538, 239, -1873),
    COL_VERTEX(-1538, -183, -1873),
    COL_VERTEX(845, 660, 77),
    COL_VERTEX(1690, -153, 77),
    COL_VERTEX(-460, -460, 307),
    COL_VERTEX(0, -460, 307),
    COL_VERTEX(-1381, -1074, 2458),
    COL_VERTEX(-1535, -685, 2458),
    COL_VERTEX(-1535, -153, 2458),
    COL_VERTEX(584, -613, -1689),
    COL_VERTEX(891, -736, -1689),
    COL_VERTEX(276, -736, -1566),
    COL_VERTEX(276, -613, -1566),
    COL_VERTEX(-275, -491, -1566),
    COL_VERTEX(276, -491, -1381),
    COL_VERTEX(-275, -736, -1566),
    COL_VERTEX(-282, -767, 1997),
    COL_VERTEX(-217, -1074, 1885),
    COL_VERTEX(-217, -767, 1885),
    COL_VERTEX(-217, -1074, 2109),
    COL_VERTEX(-88, -1074, 2109),
    COL_VERTEX(-24, -767, 1997),
    COL_VERTEX(-88, -1074, 1885),
    COL_VERTEX(-437, -437, 489),
    COL_VERTEX(-773, -460, 1403),
    COL_VERTEX(-512, -460, 489),
    COL_VERTEX(-773, -1074, 1710),
    COL_VERTEX(-437, -541, 489),
    COL_VERTEX(-768, -460, 492),
    COL_VERTEX(-1535, -275, -153),
    COL_VERTEX(-1842, -1074, 614),
    COL_VERTEX(-1535, -767, 614),
    COL_VERTEX(-1996, -767, 0),
    COL_VERTEX(-2149, -767, 307),
    COL_VERTEX(-1996, -1074, 0),
    COL_VERTEX(1741, -849, 2150),
    COL_VERTEX(1997, -849, 2304),
    COL_VERTEX(1997, -849, 2458),
    COL_VERTEX(1812, -736, 31),
    COL_VERTEX(1690, -828, -398),
    COL_VERTEX(-1535, -613, -2149),
    COL_VERTEX(-1535, -1074, -2149),
    COL_VERTEX(-1996, -613, -1996),
    COL_VERTEX(-1996, -613, -1535),
    COL_VERTEX(-2149, -613, -1381),
    COL_VERTEX(-2149, -613, -921),
    COL_VERTEX(-1538, -405, -1565),
    COL_VERTEX(-1538, -1996, -1566),
    COL_VERTEX(-1381, -460, -2149),
    COL_VERTEX(-1535, -1074, -2457),
    COL_VERTEX(-1381, -306, -2457),
    COL_VERTEX(230, -183, 307),
    COL_VERTEX(294, -183, 383),
    COL_VERTEX(92, -183, 307),
    COL_VERTEX(246, -183, 707),
    COL_VERTEX(-537, 630, 77),
    COL_VERTEX(-537, 660, 169),
    COL_VERTEX(-537, 660, 77),
    COL_VERTEX(691, 660, 169),
    COL_VERTEX(922, 246, 77),
    COL_VERTEX(-767, -153, 307),
    COL_VERTEX(1720, -491, -1381),
    COL_VERTEX(1720, -460, -1381),
    COL_VERTEX(1966, -613, -245),
    COL_VERTEX(1690, -153, 615),
    COL_VERTEX(1690, -153, -1381),
    COL_VERTEX(1690, -613, 31),
    COL_VERTEX(1997, -1996, -767),
    COL_VERTEX(522, -183, 1106),
    COL_VERTEX(768, -183, 1106),
    COL_VERTEX(768, -153, 1137),
    COL_VERTEX(1321, -583, -1689),
    COL_VERTEX(1690, -491, -1689),
    COL_VERTEX(891, -644, -1689),
    COL_VERTEX(891, -613, -1689),
    COL_VERTEX(891, -644, -1566),
    COL_VERTEX(1690, -491, -1566),
    COL_VERTEX(-537, 494, -382),
    COL_VERTEX(-690, 507, -75),
    COL_VERTEX(-1381, -60, 307),
    COL_VERTEX(-1303, 215, -552),
    COL_VERTEX(-1303, 27, -552),
    COL_VERTEX(-1074, 154, -153),
    COL_VERTEX(-767, -153, 399),
    COL_VERTEX(-1689, -91, 1229),
    COL_VERTEX(-306, -306, 1536),
    COL_VERTEX(-460, 0, 307),
    COL_VERTEX(-844, 332, -382),
    COL_VERTEX(-1268, 215, -736),
    COL_VERTEX(-1689, -60, -1381),
    COL_VERTEX(-767, 154, -1381),
    COL_VERTEX(-767, 246, -1381),
    COL_VERTEX(-537, 495, -382),
    COL_VERTEX(307, 1229, -766),
    COL_VERTEX(-768, -541, 492),
    COL_VERTEX(215, 1167, -674),
    COL_VERTEX(-214, 1167, -674),
    COL_VERTEX(215, 1167, -244),
    COL_VERTEX(-1424, -685, 2458),
    COL_VERTEX(-2457, -890, 2458),
    COL_VERTEX(-2149, -1074, 1536),
    COL_VERTEX(-1228, -1996, -2149),
    COL_VERTEX(-1381, -1996, -2149),
    COL_VERTEX(-1381, -767, -2149),
    COL_VERTEX(-2457, -1074, 1843),
    COL_VERTEX(2304, -460, -859),
    COL_VERTEX(2304, -1996, -767),
    COL_VERTEX(2304, -1996, -1996),
    COL_VERTEX(1690, -1996, -1996),
    COL_VERTEX(1920, -767, 1229),
    COL_VERTEX(1997, -767, 1075),
    COL_VERTEX(1997, -1074, 2458),
    COL_VERTEX(691, 968, -536),
    COL_VERTEX(845, 968, -872),
    COL_VERTEX(1997, -1074, 2304),
    COL_VERTEX(1690, -153, 307),
    COL_VERTEX(1920, -1996, 1229),
    COL_VERTEX(1690, -1996, 1229),
    COL_VERTEX(2243, -767, 92),
    COL_VERTEX(1997, -767, 676),
    COL_VERTEX(2150, -767, 768),
    COL_VERTEX(2304, -1996, 215),
    COL_VERTEX(-1013, -245, -1381),
    COL_VERTEX(-275, -429, -1381),
    COL_VERTEX(-275, -1996, -1381),
    COL_VERTEX(-306, 1229, -152),
    COL_VERTEX(307, 1229, -152),
    COL_VERTEX(-1381, -1074, 2396),
    COL_VERTEX(584, -736, -1689),
    COL_VERTEX(891, -613, -1381),
    COL_VERTEX(891, -736, -1381),
    COL_VERTEX(276, -613, -1381),
    COL_VERTEX(276, -491, -1566),
    COL_VERTEX(-275, -491, -1381),
    COL_VERTEX(-88, -767, 1885),
    COL_VERTEX(-88, -767, 2109),
    COL_VERTEX(-217, -767, 2109),
    COL_VERTEX(-282, -1074, 1997),
    COL_VERTEX(-24, -1074, 1997),
    COL_VERTEX(-1842, -767, 614),
    COL_VERTEX(-2149, -1074, 307),
    COL_VERTEX(-1535, -1074, 614),
    COL_VERTEX(-1535, -767, 0),
    COL_VERTEX(-1535, -1074, 0),
    COL_VERTEX(1690, -1074, 1459),
    COL_VERTEX(-1535, -613, -1381),
    COL_VERTEX(-1535, -460, -2457),
    COL_VERTEX(-1996, -1074, -1996),
    COL_VERTEX(-1535, -613, -1842),
    COL_VERTEX(-1996, -1074, -1535),
    COL_VERTEX(-1535, -613, -921),
    COL_VERTEX(-2149, -1074, -1381),
    COL_VERTEX(-2149, -1074, -921),
    COL_VERTEX(-1535, -1074, -921),
    COL_VERTEX(-1538, -1074, -1566),
    COL_VERTEX(-1381, -1074, -2457),
    COL_VERTEX(-1535, -767, -1381),
    COL_VERTEX(-1535, -767, -1842),
    COL_VERTEX(-1074, -1074, 2304),
    COL_VERTEX(691, -183, 860),
    COL_VERTEX(-1535, -3788, -2457),
    COL_VERTEX(2458, -3788, -2457),
    COL_VERTEX(2458, -3788, -8191),
    COL_VERTEX(-1535, -3788, -8191),
    COL_VERTEX(-2457, -3788, -2457),
    COL_VERTEX(2458, -3788, 2458),
    COL_VERTEX(-2457, -3788, 2458),
    COL_VERTEX(2335, -3788, 61),
    COL_VERTEX(2335, -3788, -859),
    COL_VERTEX(1690, -3788, -859),
    COL_VERTEX(1690, -3788, 61),
    COL_VERTEX(1997, -921, 2458),
    COL_VERTEX(-1535, -921, -2457),
    COL_VERTEX(-2457, -921, -2457),
    COL_VERTEX(-2457, -1074, -2457),
    COL_VERTEX(-2457, -921, 1843),
    COL_VERTEX(-2457, -685, 2458),
    COL_VERTEX(-2457, -685, 1843),
    COL_VERTEX(-1381, -1996, -2457),
    COL_VERTEX(-1534, -1074, 2458),
    COL_TRI_INIT(SURFACE_DEFAULT, 516),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 2),
    COL_TRI(3, 4, 2),
    COL_TRI(4, 0, 2),
    COL_TRI(4, 5, 0),
    COL_TRI(0, 5, 6),
    COL_TRI(0, 6, 1),
    COL_TRI(1, 6, 7),
    COL_TRI(1, 7, 3),
    COL_TRI(4, 8, 5),
    COL_TRI(3, 8, 4),
    COL_TRI(3, 7, 8),
    COL_TRI(13, 14, 12),
    COL_TRI(9, 237, 238),
    COL_TRI(9, 10, 237),
    COL_TRI(10, 9, 239),
    COL_TRI(11, 42, 9),
    COL_TRI(11, 12, 42),
    COL_TRI(12, 43, 42),
    COL_TRI(12, 41, 43),
    COL_TRI(13, 12, 11),
    COL_TRI(24, 244, 18),
    COL_TRI(16, 241, 17),
    COL_TRI(17, 20, 16),
    COL_TRI(16, 22, 18),
    COL_TRI(16, 20, 22),
    COL_TRI(16, 242, 243),
    COL_TRI(18, 242, 16),
    COL_TRI(16, 243, 241),
    COL_TRI(19, 20, 26),
    COL_TRI(20, 17, 26),
    COL_TRI(19, 21, 22),
    COL_TRI(21, 23, 22),
    COL_TRI(22, 23, 18),
    COL_TRI(23, 24, 18),
    COL_TRI(18, 244, 242),
    COL_TRI(21, 245, 23),
    COL_TRI(24, 23, 245),
    COL_TRI(25, 24, 188),
    COL_TRI(24, 25, 244),
    COL_TRI(26, 17, 241),
    COL_TRI(27, 247, 248),
    COL_TRI(27, 248, 30),
    COL_TRI(28, 27, 30),
    COL_TRI(33, 32, 139),
    COL_TRI(29, 247, 27),
    COL_TRI(30, 248, 33),
    COL_TRI(31, 30, 35),
    COL_TRI(30, 249, 28),
    COL_TRI(31, 249, 30),
    COL_TRI(30, 33, 35),
    COL_TRI(32, 33, 155),
    COL_TRI(33, 139, 138),
    COL_TRI(38, 53, 36),
    COL_TRI(35, 252, 31),
    COL_TRI(29, 27, 112),
    COL_TRI(36, 43, 254),
    COL_TRI(36, 53, 43),
    COL_TRI(37, 36, 254),
    COL_TRI(37, 38, 36),
    COL_TRI(37, 254, 255),
    COL_TRI(37, 256, 38),
    COL_TRI(39, 255, 254),
    COL_TRI(39, 40, 255),
    COL_TRI(38, 15, 53),
    COL_TRI(40, 38, 256),
    COL_TRI(40, 39, 38),
    COL_TRI(39, 15, 38),
    COL_TRI(14, 15, 12),
    COL_TRI(15, 41, 12),
    COL_TRI(39, 41, 15),
    COL_TRI(41, 39, 254),
    COL_TRI(41, 254, 43),
    COL_TRI(42, 43, 240),
    COL_TRI(43, 53, 240),
    COL_TRI(9, 240, 239),
    COL_TRI(9, 42, 240),
    COL_TRI(44, 241, 243),
    COL_TRI(45, 44, 243),
    COL_TRI(46, 45, 243),
    COL_TRI(47, 257, 48),
    COL_TRI(47, 258, 257),
    COL_TRI(48, 257, 259),
    COL_TRI(48, 259, 260),
    COL_TRI(49, 261, 259),
    COL_TRI(49, 259, 257),
    COL_TRI(48, 260, 51),
    COL_TRI(48, 51, 52),
    COL_TRI(50, 48, 52),
    COL_TRI(51, 49, 52),
    COL_TRI(52, 262, 50),
    COL_TRI(52, 49, 262),
    COL_TRI(49, 258, 262),
    COL_TRI(49, 257, 258),
    COL_TRI(51, 261, 49),
    COL_TRI(50, 47, 48),
    COL_TRI(53, 14, 240),
    COL_TRI(53, 15, 14),
    COL_TRI(14, 239, 240),
    COL_TRI(14, 13, 239),
    COL_TRI(45, 55, 44),
    COL_TRI(54, 45, 263),
    COL_TRI(45, 54, 56),
    COL_TRI(45, 56, 55),
    COL_TRI(55, 56, 44),
    COL_TRI(44, 26, 241),
    COL_TRI(56, 264, 44),
    COL_TRI(26, 44, 264),
    COL_TRI(57, 19, 26),
    COL_TRI(58, 57, 26),
    COL_TRI(60, 19, 57),
    COL_TRI(19, 22, 20),
    COL_TRI(19, 246, 76),
    COL_TRI(59, 21, 19),
    COL_TRI(19, 13, 11),
    COL_TRI(19, 11, 59),
    COL_TRI(19, 76, 13),
    COL_TRI(61, 62, 265),
    COL_TRI(62, 63, 265),
    COL_TRI(63, 62, 84),
    COL_TRI(62, 266, 267),
    COL_TRI(62, 65, 266),
    COL_TRI(64, 62, 267),
    COL_TRI(62, 64, 84),
    COL_TRI(65, 62, 268),
    COL_TRI(61, 268, 62),
    COL_TRI(63, 70, 67),
    COL_TRI(63, 67, 265),
    COL_TRI(57, 69, 72),
    COL_TRI(67, 61, 265),
    COL_TRI(68, 60, 61),
    COL_TRI(67, 68, 61),
    COL_TRI(69, 61, 60),
    COL_TRI(69, 268, 61),
    COL_TRI(70, 71, 67),
    COL_TRI(71, 68, 67),
    COL_TRI(71, 60, 68),
    COL_TRI(60, 71, 75),
    COL_TRI(60, 75, 272),
    COL_TRI(60, 57, 72),
    COL_TRI(72, 69, 60),
    COL_TRI(76, 190, 191),
    COL_TRI(70, 269, 71),
    COL_TRI(73, 71, 269),
    COL_TRI(73, 75, 71),
    COL_TRI(74, 272, 75),
    COL_TRI(75, 73, 76),
    COL_TRI(76, 209, 190),
    COL_TRI(76, 73, 209),
    COL_TRI(13, 76, 239),
    COL_TRI(65, 95, 266),
    COL_TRI(77, 94, 65),
    COL_TRI(78, 65, 268),
    COL_TRI(77, 65, 273),
    COL_TRI(65, 78, 273),
    COL_TRI(64, 267, 129),
    COL_TRI(64, 83, 79),
    COL_TRI(64, 79, 84),
    COL_TRI(87, 177, 86),
    COL_TRI(79, 87, 185),
    COL_TRI(80, 84, 79),
    COL_TRI(80, 79, 185),
    COL_TRI(81, 87, 79),
    COL_TRI(82, 81, 79),
    COL_TRI(83, 82, 79),
    COL_TRI(84, 270, 126),
    COL_TRI(84, 80, 270),
    COL_TRI(63, 84, 126),
    COL_TRI(81, 89, 87),
    COL_TRI(85, 87, 89),
    COL_TRI(86, 185, 87),
    COL_TRI(91, 90, 81),
    COL_TRI(89, 90, 85),
    COL_TRI(90, 89, 81),
    COL_TRI(81, 82, 92),
    COL_TRI(91, 81, 92),
    COL_TRI(92, 274, 94),
    COL_TRI(93, 92, 82),
    COL_TRI(93, 274, 92),
    COL_TRI(94, 91, 92),
    COL_TRI(96, 90, 91),
    COL_TRI(95, 94, 274),
    COL_TRI(94, 96, 91),
    COL_TRI(94, 77, 96),
    COL_TRI(95, 274, 266),
    COL_TRI(90, 276, 85),
    COL_TRI(96, 276, 90),
    COL_TRI(99, 78, 97),
    COL_TRI(97, 69, 57),
    COL_TRI(98, 268, 69),
    COL_TRI(78, 69, 97),
    COL_TRI(78, 268, 98),
    COL_TRI(69, 78, 98),
    COL_TRI(77, 273, 100),
    COL_TRI(99, 273, 78),
    COL_TRI(77, 276, 96),
    COL_TRI(54, 99, 56),
    COL_TRI(77, 277, 276),
    COL_TRI(56, 99, 97),
    COL_TRI(56, 97, 264),
    COL_TRI(97, 57, 58),
    COL_TRI(97, 58, 264),
    COL_TRI(100, 99, 263),
    COL_TRI(100, 273, 99),
    COL_TRI(99, 54, 263),
    COL_TRI(103, 104, 101),
    COL_TRI(77, 100, 278),
    COL_TRI(101, 277, 77),
    COL_TRI(101, 77, 278),
    COL_TRI(101, 278, 45),
    COL_TRI(26, 264, 58),
    COL_TRI(102, 277, 101),
    COL_TRI(103, 101, 45),
    COL_TRI(104, 102, 101),
    COL_TRI(66, 63, 126),
    COL_TRI(66, 271, 106),
    COL_TRI(66, 210, 271),
    COL_TRI(66, 105, 210),
    COL_TRI(105, 66, 126),
    COL_TRI(66, 70, 63),
    COL_TRI(106, 70, 66),
    COL_TRI(70, 73, 269),
    COL_TRI(106, 73, 70),
    COL_TRI(73, 106, 271),
    COL_TRI(107, 126, 270),
    COL_TRI(108, 105, 126),
    COL_TRI(109, 31, 252),
    COL_TRI(109, 224, 31),
    COL_TRI(31, 224, 249),
    COL_TRI(110, 28, 249),
    COL_TRI(111, 110, 249),
    COL_TRI(112, 28, 110),
    COL_TRI(113, 281, 282),
    COL_TRI(113, 283, 281),
    COL_TRI(116, 221, 222),
    COL_TRI(114, 116, 118),
    COL_TRI(114, 146, 159),
    COL_TRI(115, 221, 116),
    COL_TRI(116, 119, 118),
    COL_TRI(117, 119, 222),
    COL_TRI(118, 119, 117),
    COL_TRI(119, 116, 222),
    COL_TRI(126, 125, 123),
    COL_TRI(108, 126, 194),
    COL_TRI(120, 108, 284),
    COL_TRI(108, 194, 284),
    COL_TRI(105, 108, 122),
    COL_TRI(108, 120, 122),
    COL_TRI(121, 120, 123),
    COL_TRI(122, 120, 121),
    COL_TRI(123, 120, 284),
    COL_TRI(124, 105, 122),
    COL_TRI(125, 126, 215),
    COL_TRI(129, 93, 83),
    COL_TRI(126, 123, 193),
    COL_TRI(126, 193, 194),
    COL_TRI(127, 128, 125),
    COL_TRI(125, 215, 127),
    COL_TRI(128, 137, 125),
    COL_TRI(93, 82, 83),
    COL_TRI(131, 85, 287),
    COL_TRI(64, 129, 83),
    COL_TRI(129, 274, 93),
    COL_TRI(129, 266, 274),
    COL_TRI(130, 287, 288),
    COL_TRI(130, 288, 289),
    COL_TRI(131, 287, 130),
    COL_TRI(132, 135, 134),
    COL_TRI(132, 290, 135),
    COL_TRI(133, 135, 290),
    COL_TRI(133, 285, 135),
    COL_TRI(134, 135, 123),
    COL_TRI(135, 285, 123),
    COL_TRI(123, 285, 133),
    COL_TRI(136, 132, 134),
    COL_TRI(136, 134, 123),
    COL_TRI(137, 136, 125),
    COL_TRI(137, 286, 136),
    COL_TRI(136, 286, 132),
    COL_TRI(144, 141, 291),
    COL_TRI(125, 136, 123),
    COL_TRI(138, 139, 140),
    COL_TRI(139, 142, 140),
    COL_TRI(140, 142, 143),
    COL_TRI(141, 138, 140),
    COL_TRI(141, 140, 291),
    COL_TRI(140, 143, 291),
    COL_TRI(139, 253, 142),
    COL_TRI(142, 253, 292),
    COL_TRI(142, 292, 143),
    COL_TRI(143, 144, 291),
    COL_TRI(143, 292, 144),
    COL_TRI(144, 293, 141),
    COL_TRI(141, 294, 34),
    COL_TRI(141, 293, 294),
    COL_TRI(33, 141, 34),
    COL_TRI(33, 138, 141),
    COL_TRI(145, 163, 146),
    COL_TRI(146, 118, 145),
    COL_TRI(146, 154, 159),
    COL_TRI(146, 114, 118),
    COL_TRI(102, 299, 149),
    COL_TRI(118, 147, 145),
    COL_TRI(118, 117, 147),
    COL_TRI(147, 117, 297),
    COL_TRI(117, 223, 297),
    COL_TRI(117, 222, 223),
    COL_TRI(25, 188, 149),
    COL_TRI(148, 149, 298),
    COL_TRI(148, 25, 149),
    COL_TRI(153, 301, 151),
    COL_TRI(149, 299, 150),
    COL_TRI(150, 104, 279),
    COL_TRI(104, 150, 299),
    COL_TRI(149, 150, 298),
    COL_TRI(151, 158, 153),
    COL_TRI(152, 153, 158),
    COL_TRI(152, 250, 153),
    COL_TRI(153, 250, 301),
    COL_TRI(33, 250, 152),
    COL_TRI(33, 251, 250),
    COL_TRI(154, 155, 158),
    COL_TRI(154, 158, 157),
    COL_TRI(156, 158, 191),
    COL_TRI(157, 158, 156),
    COL_TRI(158, 155, 152),
    COL_TRI(155, 162, 32),
    COL_TRI(155, 154, 162),
    COL_TRI(34, 32, 33),
    COL_TRI(34, 294, 32),
    COL_TRI(159, 154, 160),
    COL_TRI(114, 159, 160),
    COL_TRI(154, 295, 162),
    COL_TRI(160, 154, 157),
    COL_TRI(154, 146, 295),
    COL_TRI(146, 163, 295),
    COL_TRI(161, 295, 296),
    COL_TRI(161, 302, 295),
    COL_TRI(162, 295, 302),
    COL_TRI(163, 296, 295),
    COL_TRI(162, 302, 303),
    COL_TRI(162, 303, 32),
    COL_TRI(161, 296, 163),
    COL_TRI(161, 163, 145),
    COL_TRI(164, 170, 167),
    COL_TRI(165, 164, 167),
    COL_TRI(166, 165, 167),
    COL_TRI(166, 167, 304),
    COL_TRI(167, 170, 305),
    COL_TRI(167, 305, 172),
    COL_TRI(168, 172, 305),
    COL_TRI(169, 172, 306),
    COL_TRI(167, 172, 171),
    COL_TRI(168, 306, 172),
    COL_TRI(170, 173, 305),
    COL_TRI(170, 164, 173),
    COL_TRI(171, 307, 166),
    COL_TRI(171, 166, 304),
    COL_TRI(172, 307, 171),
    COL_TRI(167, 171, 304),
    COL_TRI(168, 173, 169),
    COL_TRI(168, 169, 306),
    COL_TRI(173, 168, 305),
    COL_TRI(172, 169, 307),
    COL_TRI(181, 175, 179),
    COL_TRI(174, 308, 309),
    COL_TRI(174, 309, 175),
    COL_TRI(175, 176, 174),
    COL_TRI(176, 178, 174),
    COL_TRI(174, 88, 308),
    COL_TRI(177, 88, 174),
    COL_TRI(178, 177, 174),
    COL_TRI(179, 175, 309),
    COL_TRI(179, 309, 310),
    COL_TRI(180, 176, 175),
    COL_TRI(185, 275, 215),
    COL_TRI(88, 177, 87),
    COL_TRI(86, 184, 185),
    COL_TRI(177, 182, 86),
    COL_TRI(182, 186, 86),
    COL_TRI(86, 186, 184),
    COL_TRI(183, 275, 185),
    COL_TRI(184, 183, 185),
    COL_TRI(185, 215, 80),
    COL_TRI(182, 178, 187),
    COL_TRI(182, 187, 186),
    COL_TRI(186, 187, 184),
    COL_TRI(178, 182, 177),
    COL_TRI(187, 183, 184),
    COL_TRI(80, 215, 107),
    COL_TRI(80, 107, 270),
    COL_TRI(46, 103, 45),
    COL_TRI(46, 311, 103),
    COL_TRI(148, 312, 311),
    COL_TRI(148, 311, 46),
    COL_TRI(103, 279, 104),
    COL_TRI(188, 24, 245),
    COL_TRI(189, 188, 245),
    COL_TRI(149, 188, 189),
    COL_TRI(190, 213, 191),
    COL_TRI(156, 191, 213),
    COL_TRI(191, 237, 10),
    COL_TRI(191, 10, 239),
    COL_TRI(76, 191, 239),
    COL_TRI(133, 192, 123),
    COL_TRI(192, 121, 123),
    COL_TRI(193, 123, 284),
    COL_TRI(192, 122, 121),
    COL_TRI(192, 313, 122),
    COL_TRI(194, 193, 284),
    COL_TRI(195, 260, 196),
    COL_TRI(195, 196, 314),
    COL_TRI(196, 315, 316),
    COL_TRI(196, 260, 315),
    COL_TRI(195, 315, 260),
    COL_TRI(200, 199, 319),
    COL_TRI(195, 317, 315),
    COL_TRI(197, 195, 314),
    COL_TRI(197, 198, 195),
    COL_TRI(195, 198, 317),
    COL_TRI(198, 200, 317),
    COL_TRI(198, 318, 200),
    COL_TRI(199, 318, 198),
    COL_TRI(200, 318, 199),
    COL_TRI(205, 202, 323),
    COL_TRI(201, 199, 198),
    COL_TRI(201, 198, 197),
    COL_TRI(202, 204, 203),
    COL_TRI(203, 204, 320),
    COL_TRI(204, 207, 320),
    COL_TRI(204, 321, 207),
    COL_TRI(204, 322, 321),
    COL_TRI(204, 202, 322),
    COL_TRI(202, 203, 323),
    COL_TRI(205, 322, 202),
    COL_TRI(209, 211, 213),
    COL_TRI(206, 322, 205),
    COL_TRI(206, 321, 322),
    COL_TRI(207, 321, 206),
    COL_TRI(208, 207, 324),
    COL_TRI(207, 206, 324),
    COL_TRI(208, 320, 207),
    COL_TRI(203, 320, 208),
    COL_TRI(73, 271, 209),
    COL_TRI(210, 211, 209),
    COL_TRI(190, 209, 213),
    COL_TRI(211, 280, 213),
    COL_TRI(212, 213, 280),
    COL_TRI(213, 212, 156),
    COL_TRI(210, 209, 271),
    COL_TRI(210, 280, 214),
    COL_TRI(210, 212, 280),
    COL_TRI(160, 157, 156),
    COL_TRI(210, 214, 211),
    COL_TRI(212, 210, 124),
    COL_TRI(214, 280, 211),
    COL_TRI(215, 275, 127),
    COL_TRI(216, 325, 219),
    COL_TRI(216, 219, 326),
    COL_TRI(217, 216, 327),
    COL_TRI(217, 325, 216),
    COL_TRI(218, 219, 325),
    COL_TRI(218, 325, 217),
    COL_TRI(219, 218, 220),
    COL_TRI(219, 220, 326),
    COL_TRI(220, 218, 328),
    COL_TRI(218, 217, 328),
    COL_TRI(220, 328, 329),
    COL_TRI(154, 330, 160),
    COL_TRI(223, 300, 297),
    COL_TRI(149, 189, 102),
    COL_TRI(102, 104, 299),
    COL_TRI(148, 298, 312),
    COL_TRI(221, 115, 300),
    COL_TRI(222, 221, 300),
    COL_TRI(223, 222, 300),
    COL_TRI(226, 228, 229),
    COL_TRI(210, 105, 124),
    COL_TRI(224, 111, 249),
    COL_TRI(111, 224, 109),
    COL_TRI(112, 110, 225),
    COL_TRI(225, 110, 111),
    COL_TRI(226, 229, 331),
    COL_TRI(187, 232, 183),
    COL_TRI(226, 333, 228),
    COL_TRI(228, 335, 229),
    COL_TRI(228, 333, 335),
    COL_TRI(229, 336, 331),
    COL_TRI(229, 231, 336),
    COL_TRI(229, 230, 231),
    COL_TRI(229, 335, 337),
    COL_TRI(229, 337, 230),
    COL_TRI(230, 338, 231),
    COL_TRI(230, 337, 338),
    COL_TRI(231, 339, 336),
    COL_TRI(231, 338, 339),
    COL_TRI(226, 334, 234),
    COL_TRI(232, 275, 183),
    COL_TRI(232, 127, 275),
    COL_TRI(127, 232, 128),
    COL_TRI(128, 232, 176),
    COL_TRI(176, 232, 178),
    COL_TRI(232, 187, 178),
    COL_TRI(176, 180, 233),
    COL_TRI(233, 340, 176),
    COL_TRI(236, 341, 235),
    COL_TRI(227, 226, 332),
    COL_TRI(226, 227, 333),
    COL_TRI(234, 236, 332),
    COL_TRI(226, 234, 332),
    COL_TRI(227, 332, 235),
    COL_TRI(235, 332, 236),
    COL_TRI(85, 276, 33),
    COL_TRI(276, 102, 33),
    COL_TRI(276, 277, 102),
    COL_TRI(85, 33, 32),
    COL_TRI_INIT(SURFACE_DEATH_PLANE, 4),
    COL_TRI(346, 347, 348),
    COL_TRI(346, 348, 349),
    COL_TRI(350, 351, 347),
    COL_TRI(350, 352, 351),
    COL_TRI_INIT(SURFACE_WALL_MISC, 16),
    COL_TRI(192, 121, 357),
    COL_TRI(192, 357, 297),
    COL_TRI(235, 358, 359),
    COL_TRI(235, 359, 360),
    COL_TRI(360, 359, 361),
    COL_TRI(360, 361, 290),
    COL_TRI(135, 362, 285),
    COL_TRI(135, 363, 362),
    COL_TRI(362, 123, 285),
    COL_TRI(362, 193, 123),
    COL_TRI(331, 342, 343),
    COL_TRI(331, 343, 334),
    COL_TRI(234, 343, 289),
    COL_TRI(234, 334, 343),
    COL_TRI(234, 288, 236),
    COL_TRI(364, 236, 288),
    COL_TRI_INIT(SURFACE_ICE, 18),
    COL_TRI(344, 313, 192),
    COL_TRI(192, 297, 206),
    COL_TRI(192, 206, 205),
    COL_TRI(344, 192, 205),
    COL_TRI(297, 300, 115),
    COL_TRI(297, 115, 206),
    COL_TRI(324, 206, 115),
    COL_TRI(205, 323, 212),
    COL_TRI(212, 344, 205),
    COL_TRI(212, 323, 203),
    COL_TRI(212, 208, 156),
    COL_TRI(212, 203, 208),
    COL_TRI(208, 115, 156),
    COL_TRI(208, 324, 115),
    COL_TRI(156, 115, 160),
    COL_TRI(235, 360, 133),
    COL_TRI(133, 365, 128),
    COL_TRI(133, 128, 235),
    COL_TRI_INIT(SURFACE_HARD_VERY_SLIPPERY, 12),
    COL_TRI(191, 158, 345),
    COL_TRI(9, 238, 59),
    COL_TRI(11, 9, 59),
    COL_TRI(151, 21, 59),
    COL_TRI(345, 151, 238),
    COL_TRI(191, 345, 238),
    COL_TRI(158, 151, 345),
    COL_TRI(151, 59, 238),
    COL_TRI(21, 151, 301),
    COL_TRI(301, 245, 21),
    COL_TRI(191, 238, 237),
    COL_TRI(301, 189, 245),
    COL_TRI_INIT(SURFACE_HARD_NOT_SLIPPERY, 20),
    COL_TRI(212, 124, 122),
    COL_TRI(6, 8, 7),
    COL_TRI(6, 5, 8),
    COL_TRI(289, 131, 130),
    COL_TRI(289, 342, 131),
    COL_TRI(289, 343, 342),
    COL_TRI(344, 212, 122),
    COL_TRI(311, 282, 103),
    COL_TRI(122, 313, 344),
    COL_TRI(298, 279, 312),
    COL_TRI(298, 150, 279),
    COL_TRI(282, 281, 279),
    COL_TRI(312, 279, 281),
    COL_TRI(282, 279, 103),
    COL_TRI(312, 283, 113),
    COL_TRI(312, 113, 311),
    COL_TRI(312, 281, 283),
    COL_TRI(311, 113, 282),
    COL_TRI(160, 115, 114),
    COL_TRI(115, 116, 114),
    COL_TRI_INIT(SURFACE_VERTICAL_WIND, 2),
    COL_TRI(353, 354, 355),
    COL_TRI(353, 355, 356),
    COL_TRI_INIT(SURFACE_CAMERA_8_DIR, 4),
    COL_TRI(243, 242, 46),
    COL_TRI(242, 148, 46),
    COL_TRI(242, 244, 148),
    COL_TRI(244, 25, 148),
    COL_TRI_STOP(),
    COL_SPECIAL_INIT(3),
    SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_null_start,   /*pos*/ -2211,  -890,  2212, /*yaw*/ 106),
    SPECIAL_OBJECT_WITH_YAW(/*preset*/ special_level_geo_03, /*pos*/   -40,  -767, -4494, /*yaw*/   0),
    SPECIAL_OBJECT(/*preset*/ special_bubble_tree,  /*pos*/  1444,  -153,   676),
    COL_WATER_BOX_INIT(3),
    COL_WATER_BOX(0, -2457, -2457, -1535, 1874, -921),
    COL_WATER_BOX(1, -1381, 1352, 2089, 2458, -921),
    COL_WATER_BOX(2, -306, -766, 307, -152, 1204),
    COL_END(),
].flat();

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)