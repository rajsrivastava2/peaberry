/**
 * Copyright (C) 2008 Stuart McCulloch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.ops4j.peaberry.cache;

import org.ops4j.peaberry.ServiceRegistry;

/**
 * {@link ServiceRegistry} that caches service instances for faster lookup.
 * 
 * @author mcculls@gmail.com (Stuart McCulloch)
 */
public interface CachingServiceRegistry
    extends ServiceRegistry {

  /**
   * Release any unused service instances from the cache.
   * 
   * @param targetGeneration the generation to flush
   */
  void flush(int targetGeneration);
}
