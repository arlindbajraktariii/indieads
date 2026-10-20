import React from 'react';
import { View, Text, Image, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const Index: React.FC = () => {
  const handleClick = () => {
    Taro.showToast({ title: 'Sign Up Now', icon: 'success' });
  };

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>Welcome to Our Platform</Text>
        <Text className={styles.subtitle}>Discover the best solutions for your needs</Text>
      </View>
      <View className={styles.features}>
        <View className={styles.feature}>
          <Text className={styles.featureTitle}>Feature 1</Text>
          <Text className={styles.featureDescription}>Description of feature 1</Text>
        </View>
        <View className={styles.feature}>
          <Text className={styles.featureTitle}>Feature 2</Text>
          <Text className={styles.featureDescription}>Description of feature 2</Text>
        </View>
        <View className={styles.feature}>
          <Text className={styles.featureTitle}>Feature 3</Text>
          <Text className={styles.featureDescription}>Description of feature 3</Text>
        </View>
      </View>
      <View className={styles.testimonials}>
        <Text className={styles.testimonialTitle}>What Our Customers Say</Text>
        <View className={styles.testimonial}>
          <Text className={styles.testimonialQuote}>"This platform has transformed our business!"</Text>
          <Text className={styles.testimonialAuthor}>- John Doe</Text>
        </View>
      </View>
      <View className={styles.cta}>
        <Button className={styles.ctaButton} onClick={handleClick}>Sign Up Now</Button>
      </View>
      <View className={styles.footer}>
        <Text className={styles.footerText}>© 2023 Our Company. All rights reserved.</Text>
      </View>
    </View>
  );
};

export default Index;