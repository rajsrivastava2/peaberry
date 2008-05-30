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

package org.ops4j.peaberry.internal;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.WildcardType;

import org.ops4j.peaberry.ServiceWatcher.Handle;

/**
 * Collection of utility methods for dealing with service types.
 * 
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
public final class ServiceTypes {

  // utility: instances not allowed
  private ServiceTypes() {}

  /**
   * Extract the expected service type from the given member type.
   * 
   * @param type runtime type of member being injected
   * 
   * @return expected service type
   */
  public static Type getServiceType(final Type type) {

    if (expectsSequence(type) || expectsHandle(type)) {
      if (type instanceof ParameterizedType) {
        // service type inside Iterable<T> or Handle<T>
        return ((ParameterizedType) type).getActualTypeArguments()[0];
      }
      // must be raw type
      return Object.class;
    }

    return type;
  }

  /**
   * Extract the expected service class from the given member type.
   * 
   * @param type runtime type of member being injected
   * 
   * @return expected service class
   */
  public static Class<?> getServiceClass(final Type type) {
    final Type serviceType = getServiceType(type);

    // use raw type for generic service types
    if (serviceType instanceof ParameterizedType) {
      return (Class<?>) ((ParameterizedType) serviceType).getRawType();
    }

    // use upper bound for wildcard service types
    if (serviceType instanceof WildcardType) {
      return (Class<?>) ((WildcardType) serviceType).getUpperBounds()[0];
    }

    return (Class<?>) serviceType;
  }

  /**
   * Is the service type hidden inside a sequence, like Iterable<T>.
   * 
   * @param type runtime type of member being injected
   * 
   * @return true if a sequence of services is expected
   */
  public static boolean expectsSequence(final Type type) {
    if (type instanceof ParameterizedType) {
      return Iterable.class == ((ParameterizedType) type).getRawType();
    }
    return Iterable.class == type;
  }

  /**
   * Is the service type hidden inside a handle, like Handle<T>.
   * 
   * @param type runtime type of member being injected
   * 
   * @return true if a service watcher handle is expected
   */
  public static boolean expectsHandle(final Type type) {
    if (type instanceof ParameterizedType) {
      return Handle.class == ((ParameterizedType) type).getRawType();
    }
    return Handle.class == type;
  }
}
