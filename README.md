# CashWise 

Nosso projeto para o PI3. Consiste em uma plataforma web 
que visa ensinar a educação financeira, e à ajudar no 
controle de gastos e um calculador de previdência. Tudo com 
um conteúdo mais leve, e com uma abordagem de "gameficação".

## Banco de dados MYSQL com ORM PRISMA

### Comandinhos pra lembrar:

Faz a migração do schema para o dialeto do MYSQL
```
npx prisma migrate dev --name init
```
Insere os ícones no bd:
```
npm run insert-icons 
```

### Referência dos comandos
https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate/troubleshooting-development

## Documentação real oficial do Zuztand

https://github.com/pmndrs/zustand/blob/main/docs/getting-started/introduction.md

### Trechozinhos para lembrar de como usar ele

#### Criação de um Store
```
import { create } from 'zustand';

const useCoxinhaStore = create((set) => ({
  coxinhas: 1000,
  comerCoxinha: () => set((state) => ({ coxinhas: state.coxinhas - 1 })),
  mandarCoxinhasPraDentro: () => set({ coxinhas: 0 }),
}));
```

#### Importações e definições no componente em que você quer usa-lo
```
// Atribuindo apenas o valor que está lá no Store //
function CoxinhasCounter() {
  const coxinhas = useStore((state) => state.coxinhas)
  return <h1>{coxinhas} Coxinhas na fryer</h1>
}

// Usar um método de dentro do Store, como o método comerCoxinha para diminuir em //
// 1 o número de coxinhas
function Controls() {
  const comerCoxinha = useStore((state) => state.comerCoxinha)
  return <button onClick={comerCoxinha}>Comer uma coxinha</button>
}
```

## Dados para o funcionamento do sistema Simule

```
INSERT INTO `atualizacao_monetaria` (`id`, `mes_ano`, `indice`) VALUES
(1, '1994-07', 10.534006),
(2, '1994-08', 9.930246),
(3, '1994-09', 9.416119),
(4, '1994-10', 9.276060),
(5, '1994-11', 9.106674),
(6, '1994-12', 8.818315),
(7, '1995-01', 8.629332),
(8, '1995-02', 8.487585),
(9, '1995-03', 8.404383),
(10, '1995-04', 8.287527),
(11, '1995-05', 8.131407),
(12, '1995-06', 7.927665),
(13, '1995-07', 7.785964),
(14, '1995-08', 7.599023),
(15, '1995-09', 7.522298),
(16, '1995-10', 7.435305),
(17, '1995-11', 7.332645),
(18, '1995-12', 7.223572),
(19, '1996-01', 7.106316),
(20, '1996-02', 7.004063),
(21, '1996-03', 6.954678),
(22, '1996-04', 6.934571),
(23, '1996-05', 6.886365),
(24, '1996-06', 6.772583),
(25, '1996-07', 6.690958),
(26, '1996-08', 6.618812),
(27, '1996-09', 6.618542),
(28, '1996-10', 6.609952),
(29, '1996-11', 6.595442),
(30, '1996-12', 6.577028),
(31, '1997-01', 6.519652),
(32, '1997-02', 6.418246),
(33, '1997-03', 6.391397),
(34, '1997-04', 6.318114),
(35, '1997-05', 6.281052),
(36, '1997-06', 6.262268),
(37, '1997-07', 6.218738),
(38, '1997-08', 6.213146),
(39, '1997-09', 6.213146),
(40, '1997-10', 6.176699),
(41, '1997-11', 6.155770),
(42, '1997-12', 6.105098),
(43, '1998-01', 6.063262),
(44, '1998-02', 6.010376),
(45, '1998-03', 6.009171),
(46, '1998-04', 5.995380),
(47, '1998-05', 5.995380),
(48, '1998-06', 5.981624),
(49, '1998-07', 5.964918),
(50, '1998-08', 5.964918),
(51, '1998-09', 5.964918),
(52, '1998-10', 5.964918),
(53, '1998-11', 5.964918),
(54, '1998-12', 5.964918),
(55, '1999-01', 5.907037),
(56, '1999-02', 5.839867),
(57, '1999-03', 5.591605),
(58, '1999-04', 5.483040),
(59, '1999-05', 5.481398),
(60, '1999-06', 5.481398),
(61, '1999-07', 5.426050),
(62, '1999-08', 5.341131),
(63, '1999-09', 5.264790),
(64, '1999-10', 5.188515),
(65, '1999-11', 5.092274),
(66, '1999-12', 4.966618),
(67, '2000-01', 4.906273),
(68, '2000-02', 4.856732),
(69, '2000-03', 4.847522),
(70, '2000-04', 4.838812),
(71, '2000-05', 4.832529),
(72, '2000-06', 4.800365),
(73, '2000-07', 4.756136),
(74, '2000-08', 4.651028),
(75, '2000-09', 4.567885),
(76, '2000-10', 4.536585),
(77, '2000-11', 4.519861),
(78, '2000-12', 4.502299),
(79, '2001-01', 4.468339),
(80, '2001-02', 4.446559),
(81, '2001-03', 4.431486),
(82, '2001-04', 4.396314),
(83, '2001-05', 4.347194),
(84, '2001-06', 4.328151),
(85, '2001-07', 4.265870),
(86, '2001-08', 4.197864),
(87, '2001-09', 4.160416),
(88, '2001-10', 4.144671),
(89, '2001-11', 4.085431),
(90, '2001-12', 4.054612),
(91, '2002-01', 4.047334),
(92, '2002-02', 4.039660),
(93, '2002-03', 4.032399),
(94, '2002-04', 4.027969),
(95, '2002-05', 3.999968),
(96, '2002-06', 3.956055),
(97, '2002-07', 3.888390),
(98, '2002-08', 3.810288),
(99, '2002-09', 3.722440),
(100, '2002-10', 3.626692),
(101, '2002-11', 3.480177),
(102, '2002-12', 3.288141),
(103, '2003-01', 3.201701),
(104, '2003-02', 3.133695),
(105, '2003-03', 3.084654),
(106, '2003-04', 3.034287),
(107, '2003-05', 3.021893),
(108, '2003-06', 3.042280),
(109, '2003-07', 3.063724),
(110, '2003-08', 3.069868),
(111, '2003-09', 3.050948),
(112, '2003-10', 3.019248),
(113, '2003-11', 3.006018),
(114, '2003-12', 2.991661),
(115, '2004-01', 2.973816),
(116, '2004-02', 2.950216),
(117, '2004-03', 2.938754),
(118, '2004-04', 2.922101),
(119, '2004-05', 2.910169),
(120, '2004-06', 2.898571),
(121, '2004-07', 2.884162),
(122, '2004-08', 2.863251),
(123, '2004-09', 2.849006),
(124, '2004-10', 2.844173),
(125, '2004-11', 2.839347),
(126, '2004-12', 2.826904),
(127, '2005-01', 2.802799),
(128, '2005-02', 2.786916),
(129, '2005-03', 2.774707),
(130, '2005-04', 2.754596),
(131, '2005-05', 2.729757),
(132, '2005-06', 2.710781),
(133, '2005-07', 2.713767),
(134, '2005-08', 2.712952),
(135, '2005-09', 2.712952),
(136, '2005-10', 2.708889),
(137, '2005-11', 2.693272),
(138, '2005-12', 2.678802),
(139, '2006-01', 2.668133),
(140, '2006-02', 2.658032),
(141, '2006-03', 2.651935),
(142, '2006-04', 2.644788),
(143, '2006-05', 2.641621),
(144, '2006-06', 2.638193),
(145, '2006-07', 2.640034),
(146, '2006-08', 2.637140),
(147, '2006-09', 2.637663),
(148, '2006-10', 2.633451),
(149, '2006-11', 2.622177),
(150, '2006-12', 2.611208),
(151, '2007-01', 2.595116),
(152, '2007-02', 2.582470),
(153, '2007-03', 2.571664),
(154, '2007-04', 2.560394),
(155, '2007-05', 2.553760),
(156, '2007-06', 2.547134),
(157, '2007-07', 2.539268),
(158, '2007-08', 2.531162),
(159, '2007-09', 2.516316),
(160, '2007-10', 2.510045),
(161, '2007-11', 2.502539),
(162, '2007-12', 2.491816),
(163, '2008-01', 2.467879),
(164, '2008-02', 2.450970),
(165, '2008-03', 2.438533),
(166, '2008-04', 2.426158),
(167, '2008-05', 2.410732),
(168, '2008-06', 2.387812),
(169, '2008-07', 2.366279),
(170, '2008-08', 2.352632),
(171, '2008-09', 2.347698),
(172, '2008-10', 2.344182),
(173, '2008-11', 2.332520),
(174, '2008-12', 2.323691),
(175, '2009-01', 2.316975),
(176, '2009-02', 2.302239),
(177, '2009-03', 2.295125),
(178, '2009-04', 2.290540),
(179, '2009-05', 2.278019),
(180, '2009-06', 2.264429),
(181, '2009-07', 2.254956),
(182, '2009-08', 2.249782),
(183, '2009-09', 2.247982),
(184, '2009-10', 2.244392),
(185, '2009-11', 2.239020),
(186, '2009-12', 2.230765),
(187, '2010-01', 2.225416),
(188, '2010-02', 2.206009),
(189, '2010-03', 2.190672),
(190, '2010-04', 2.175231),
(191, '2010-05', 2.159465),
(192, '2010-06', 2.150222),
(193, '2010-07', 2.152591),
(194, '2010-08', 2.154100),
(195, '2010-09', 2.155609),
(196, '2010-10', 2.144032),
(197, '2010-11', 2.124480),
(198, '2010-12', 2.102821),
(199, '2011-01', 2.090282),
(200, '2011-02', 2.070815),
(201, '2011-03', 2.059693),
(202, '2011-04', 2.046191),
(203, '2011-05', 2.031556),
(204, '2011-06', 2.020046),
(205, '2011-07', 2.015611),
(206, '2011-08', 2.015611),
(207, '2011-09', 2.007179),
(208, '2011-10', 1.998192),
(209, '2011-11', 1.991818),
(210, '2011-12', 1.980522),
(211, '2012-01', 1.970483),
(212, '2012-02', 1.960482),
(213, '2012-03', 1.952863),
(214, '2012-04', 1.949353),
(215, '2012-05', 1.936964),
(216, '2012-06', 1.926366),
(217, '2012-07', 1.921367),
(218, '2012-08', 1.913145),
(219, '2012-09', 1.904570),
(220, '2012-10', 1.892649),
(221, '2012-11', 1.879306),
(222, '2012-12', 1.869213),
(223, '2013-01', 1.855477),
(224, '2013-02', 1.838566),
(225, '2013-03', 1.829054),
(226, '2013-04', 1.818143),
(227, '2013-05', 1.807479),
(228, '2013-06', 1.801176),
(229, '2013-07', 1.796150),
(230, '2013-08', 1.798485),
(231, '2013-09', 1.795614),
(232, '2013-10', 1.790777),
(233, '2013-11', 1.779925),
(234, '2013-12', 1.770356),
(235, '2014-01', 1.757701),
(236, '2014-02', 1.746707),
(237, '2014-03', 1.735595),
(238, '2014-04', 1.721480),
(239, '2014-05', 1.708151),
(240, '2014-06', 1.697962),
(241, '2014-07', 1.693559),
(242, '2014-08', 1.691361),
(243, '2014-09', 1.688321),
(244, '2014-10', 1.680092),
(245, '2014-11', 1.673733),
(246, '2014-12', 1.664907),
(247, '2015-01', 1.654647),
(248, '2015-02', 1.630517),
(249, '2015-03', 1.611819),
(250, '2015-04', 1.587845),
(251, '2015-05', 1.576650),
(252, '2015-06', 1.561194),
(253, '2015-07', 1.549265),
(254, '2015-08', 1.540333),
(255, '2015-09', 1.536486),
(256, '2015-10', 1.528691),
(257, '2015-11', 1.517013),
(258, '2015-12', 1.500356),
(259, '2016-01', 1.486975),
(260, '2016-02', 1.464857),
(261, '2016-03', 1.451069),
(262, '2016-04', 1.444713),
(263, '2016-05', 1.435526),
(264, '2016-06', 1.421597),
(265, '2016-07', 1.414942),
(266, '2016-08', 1.405942),
(267, '2016-09', 1.401602),
(268, '2016-10', 1.400483),
(269, '2016-11', 1.398100),
(270, '2016-12', 1.397128),
(271, '2017-01', 1.395177),
(272, '2017-02', 1.389335),
(273, '2017-03', 1.386011),
(274, '2017-04', 1.381594),
(275, '2017-05', 1.380488),
(276, '2017-06', 1.375534),
(277, '2017-07', 1.379672),
(278, '2017-08', 1.377335),
(279, '2017-09', 1.377744),
(280, '2017-10', 1.378025),
(281, '2017-11', 1.372939),
(282, '2017-12', 1.370471),
(283, '2018-01', 1.366923),
(284, '2018-02', 1.363787),
(285, '2018-03', 1.361332),
(286, '2018-04', 1.360382),
(287, '2018-05', 1.357530),
(288, '2018-06', 1.351720),
(289, '2018-07', 1.332662),
(290, '2018-08', 1.329336),
(291, '2018-09', 1.329336),
(292, '2018-10', 1.325358),
(293, '2018-11', 1.320082),
(294, '2018-12', 1.323388),
(295, '2019-01', 1.321543),
(296, '2019-02', 1.316796),
(297, '2019-03', 1.309727),
(298, '2019-04', 1.299719),
(299, '2019-05', 1.291968),
(300, '2019-06', 1.290033),
(301, '2019-07', 1.289902),
(302, '2019-08', 1.288612),
(303, '2019-09', 1.287066),
(304, '2019-10', 1.287715),
(305, '2019-11', 1.287197),
(306, '2019-12', 1.280285),
(307, '2020-01', 1.264853),
(308, '2020-02', 1.262457),
(309, '2020-03', 1.260313),
(310, '2020-04', 1.258049),
(311, '2020-05', 1.260946),
(312, '2020-06', 1.264110),
(313, '2020-07', 1.260329),
(314, '2020-08', 1.254804),
(315, '2020-09', 1.250303),
(316, '2020-10', 1.239522),
(317, '2020-11', 1.228585),
(318, '2020-12', 1.217024),
(319, '2021-01', 1.199513),
(320, '2021-02', 1.196283),
(321, '2021-03', 1.186552),
(322, '2021-04', 1.176436),
(323, '2021-05', 1.171984),
(324, '2021-06', 1.160838),
(325, '2021-07', 1.153914),
(326, '2021-08', 1.142263),
(327, '2021-09', 1.132299),
(328, '2021-10', 1.118873),
(329, '2021-11', 1.106041),
(330, '2021-12', 1.096828),
(331, '2022-01', 1.088880),
(332, '2022-02', 1.081633),
(333, '2022-03', 1.070924),
(334, '2022-04', 1.052921),
(335, '2022-05', 1.042080),
(336, '2022-06', 1.037413),
(337, '2022-07', 1.031021),
(338, '2022-08', 1.037245),
(339, '2022-09', 1.040469),
(340, '2022-10', 1.043809),
(341, '2022-11', 1.038926),
(342, '2022-12', 1.034995),
(343, '2023-01', 1.027901),
(344, '2023-02', 1.023194),
(345, '2023-03', 1.015376),
(346, '2023-04', 1.008919),
(347, '2023-05', 1.003600);
```