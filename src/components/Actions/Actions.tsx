import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Actions.css';

export default function Actions() {
  return (
    <Tabs>
      <TabList className="tabsList">
        <Tab className="">Actions</Tab>
        <Tab className="">Spells</Tab>
        <Tab className="">Feats</Tab>
        <Tab className="">Equipment</Tab>
      </TabList>

      <TabPanel>
        <h2>Actions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          imperdiet malesuada mauris, in consequat magna consequat nec.
          Vestibulum ac mi et turpis malesuada auctor. Nam massa turpis, auctor
          at pharetra et, ornare eu sapien. Fusce sollicitudin est in turpis
          hendrerit, quis porta lorem lobortis. Integer sagittis velit aliquet,
          ornare augue nec, eleifend augue. Pellentesque dignissim nec turpis eu
          imperdiet. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Fusce magna eros, aliquam eget
          consectetur a, congue vitae nulla. Nam scelerisque vehicula est in
          tincidunt. Suspendisse potenti. Quisque sagittis iaculis nibh, a
          laoreet tortor pulvinar quis. Vivamus tristique magna justo, eget
          interdum odio tristique vehicula. Vestibulum sit amet dapibus lorem.
          Nunc rutrum dignissim mi, eu tempor enim malesuada id. Nullam posuere
          ut enim at finibus. Ut non dui sed ante eleifend blandit vulputate sit
          amet purus. Donec volutpat interdum dignissim. Morbi id sagittis odio,
          varius aliquet diam. Vivamus tortor libero, suscipit ut urna eget,
          convallis auctor mauris. Maecenas ante nulla, dignissim nec aliquam a,
          vehicula in magna. Pellentesque convallis metus a neque efficitur
          mollis. Aliquam maximus ipsum sem, ac commodo lectus consectetur
          fringilla. Vestibulum sollicitudin mattis rutrum. Curabitur non
          pretium sapien, non venenatis elit. Mauris eget est a nisl luctus
          rutrum at sit amet mi. Nam faucibus leo a mauris iaculis, non varius
          orci fringilla. Nullam fringilla turpis eu tempor consectetur. Nulla
          ut vehicula ligula. Donec et risus eget turpis euismod malesuada non
          non turpis. Fusce mattis vehicula urna. Aenean et sem consequat,
          molestie turpis non, ornare urna. Suspendisse a tortor elit. Phasellus
          sit amet nibh sem. Vestibulum non quam ac felis rhoncus vehicula ut in
          dolor. Curabitur a facilisis nisl. In eget diam eu dolor placerat
          vestibulum vitae in sem. Mauris eleifend odio lobortis feugiat
          pretium. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Duis venenatis id enim quis
          volutpat. Vivamus sodales, sem at vehicula sollicitudin, enim quam
          commodo elit, convallis venenatis est dolor id urna. In vel leo sit
          amet nibh facilisis rhoncus. Vestibulum in dapibus mi, sit amet
          fermentum quam. Nam libero lorem, suscipit id leo id, fermentum
          fringilla erat. Pellentesque quam ipsum, pharetra sit amet augue sed,
          scelerisque dignissim enim. Sed ac posuere tellus, non tristique
          tortor.
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Spells</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          imperdiet malesuada mauris, in consequat magna consequat nec.
          Vestibulum ac mi et turpis malesuada auctor. Nam massa turpis, auctor
          at pharetra et, ornare eu sapien. Fusce sollicitudin est in turpis
          hendrerit, quis porta lorem lobortis. Integer sagittis velit aliquet,
          ornare augue nec, eleifend augue. Pellentesque dignissim nec turpis eu
          imperdiet. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Fusce magna eros, aliquam eget
          consectetur a, congue vitae nulla. Nam scelerisque vehicula est in
          tincidunt. Suspendisse potenti. Quisque sagittis iaculis nibh, a
          laoreet tortor pulvinar quis. Vivamus tristique magna justo, eget
          interdum odio tristique vehicula. Vestibulum sit amet dapibus lorem.
          Nunc rutrum dignissim mi, eu tempor enim malesuada id. Nullam posuere
          ut enim at finibus. Ut non dui sed ante eleifend blandit vulputate sit
          amet purus. Donec volutpat interdum dignissim. Morbi id sagittis odio,
          varius aliquet diam. Vivamus tortor libero, suscipit ut urna eget,
          convallis auctor mauris. Maecenas ante nulla, dignissim nec aliquam a,
          vehicula in magna. Pellentesque convallis metus a neque efficitur
          mollis. Aliquam maximus ipsum sem, ac commodo lectus consectetur
          fringilla. Vestibulum sollicitudin mattis rutrum. Curabitur non
          pretium sapien, non venenatis elit. Mauris eget est a nisl luctus
          rutrum at sit amet mi. Nam faucibus leo a mauris iaculis, non varius
          orci fringilla. Nullam fringilla turpis eu tempor consectetur. Nulla
          ut vehicula ligula. Donec et risus eget turpis euismod malesuada non
          non turpis. Fusce mattis vehicula urna. Aenean et sem consequat,
          molestie turpis non, ornare urna. Suspendisse a tortor elit. Phasellus
          sit amet nibh sem. Vestibulum non quam ac felis rhoncus vehicula ut in
          dolor. Curabitur a facilisis nisl. In eget diam eu dolor placerat
          vestibulum vitae in sem. Mauris eleifend odio lobortis feugiat
          pretium. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Duis venenatis id enim quis
          volutpat. Vivamus sodales, sem at vehicula sollicitudin, enim quam
          commodo elit, convallis venenatis est dolor id urna. In vel leo sit
          amet nibh facilisis rhoncus. Vestibulum in dapibus mi, sit amet
          fermentum quam. Nam libero lorem, suscipit id leo id, fermentum
          fringilla erat. Pellentesque quam ipsum, pharetra sit amet augue sed,
          scelerisque dignissim enim. Sed ac posuere tellus, non tristique
          tortor.
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Feats</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          imperdiet malesuada mauris, in consequat magna consequat nec.
          Vestibulum ac mi et turpis malesuada auctor. Nam massa turpis, auctor
          at pharetra et, ornare eu sapien. Fusce sollicitudin est in turpis
          hendrerit, quis porta lorem lobortis. Integer sagittis velit aliquet,
          ornare augue nec, eleifend augue. Pellentesque dignissim nec turpis eu
          imperdiet. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Fusce magna eros, aliquam eget
          consectetur a, congue vitae nulla. Nam scelerisque vehicula est in
          tincidunt. Suspendisse potenti. Quisque sagittis iaculis nibh, a
          laoreet tortor pulvinar quis. Vivamus tristique magna justo, eget
          interdum odio tristique vehicula. Vestibulum sit amet dapibus lorem.
          Nunc rutrum dignissim mi, eu tempor enim malesuada id. Nullam posuere
          ut enim at finibus. Ut non dui sed ante eleifend blandit vulputate sit
          amet purus. Donec volutpat interdum dignissim. Morbi id sagittis odio,
          varius aliquet diam. Vivamus tortor libero, suscipit ut urna eget,
          convallis auctor mauris. Maecenas ante nulla, dignissim nec aliquam a,
          vehicula in magna. Pellentesque convallis metus a neque efficitur
          mollis. Aliquam maximus ipsum sem, ac commodo lectus consectetur
          fringilla. Vestibulum sollicitudin mattis rutrum. Curabitur non
          pretium sapien, non venenatis elit. Mauris eget est a nisl luctus
          rutrum at sit amet mi. Nam faucibus leo a mauris iaculis, non varius
          orci fringilla. Nullam fringilla turpis eu tempor consectetur. Nulla
          ut vehicula ligula. Donec et risus eget turpis euismod malesuada non
          non turpis. Fusce mattis vehicula urna. Aenean et sem consequat,
          molestie turpis non, ornare urna. Suspendisse a tortor elit. Phasellus
          sit amet nibh sem. Vestibulum non quam ac felis rhoncus vehicula ut in
          dolor. Curabitur a facilisis nisl. In eget diam eu dolor placerat
          vestibulum vitae in sem. Mauris eleifend odio lobortis feugiat
          pretium. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Duis venenatis id enim quis
          volutpat. Vivamus sodales, sem at vehicula sollicitudin, enim quam
          commodo elit, convallis venenatis est dolor id urna. In vel leo sit
          amet nibh facilisis rhoncus. Vestibulum in dapibus mi, sit amet
          fermentum quam. Nam libero lorem, suscipit id leo id, fermentum
          fringilla erat. Pellentesque quam ipsum, pharetra sit amet augue sed,
          scelerisque dignissim enim. Sed ac posuere tellus, non tristique
          tortor.
        </p>
      </TabPanel>
      <TabPanel>
        <h2>Equipment</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          imperdiet malesuada mauris, in consequat magna consequat nec.
          Vestibulum ac mi et turpis malesuada auctor. Nam massa turpis, auctor
          at pharetra et, ornare eu sapien. Fusce sollicitudin est in turpis
          hendrerit, quis porta lorem lobortis. Integer sagittis velit aliquet,
          ornare augue nec, eleifend augue. Pellentesque dignissim nec turpis eu
          imperdiet. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Fusce magna eros, aliquam eget
          consectetur a, congue vitae nulla. Nam scelerisque vehicula est in
          tincidunt. Suspendisse potenti. Quisque sagittis iaculis nibh, a
          laoreet tortor pulvinar quis. Vivamus tristique magna justo, eget
          interdum odio tristique vehicula. Vestibulum sit amet dapibus lorem.
          Nunc rutrum dignissim mi, eu tempor enim malesuada id. Nullam posuere
          ut enim at finibus. Ut non dui sed ante eleifend blandit vulputate sit
          amet purus. Donec volutpat interdum dignissim. Morbi id sagittis odio,
          varius aliquet diam. Vivamus tortor libero, suscipit ut urna eget,
          convallis auctor mauris. Maecenas ante nulla, dignissim nec aliquam a,
          vehicula in magna. Pellentesque convallis metus a neque efficitur
          mollis. Aliquam maximus ipsum sem, ac commodo lectus consectetur
          fringilla. Vestibulum sollicitudin mattis rutrum. Curabitur non
          pretium sapien, non venenatis elit. Mauris eget est a nisl luctus
          rutrum at sit amet mi. Nam faucibus leo a mauris iaculis, non varius
          orci fringilla. Nullam fringilla turpis eu tempor consectetur. Nulla
          ut vehicula ligula. Donec et risus eget turpis euismod malesuada non
          non turpis. Fusce mattis vehicula urna. Aenean et sem consequat,
          molestie turpis non, ornare urna. Suspendisse a tortor elit. Phasellus
          sit amet nibh sem. Vestibulum non quam ac felis rhoncus vehicula ut in
          dolor. Curabitur a facilisis nisl. In eget diam eu dolor placerat
          vestibulum vitae in sem. Mauris eleifend odio lobortis feugiat
          pretium. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Duis venenatis id enim quis
          volutpat. Vivamus sodales, sem at vehicula sollicitudin, enim quam
          commodo elit, convallis venenatis est dolor id urna. In vel leo sit
          amet nibh facilisis rhoncus. Vestibulum in dapibus mi, sit amet
          fermentum quam. Nam libero lorem, suscipit id leo id, fermentum
          fringilla erat. Pellentesque quam ipsum, pharetra sit amet augue sed,
          scelerisque dignissim enim. Sed ac posuere tellus, non tristique
          tortor.
        </p>
      </TabPanel>
    </Tabs>
  );
}
